<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AudiobookModel;
use App\Models\CategoryModel;
use App\Models\ChapterModel;
use App\Models\KaryaModel;
use App\Models\KaryaStatisticModel;
use App\Models\KomentarChapterModel;
use App\Models\RatingsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class AudiobookController extends Controller
{
    public function index()
    {
        $karya = KaryaModel::orderBy('created_at', 'desc')->with('categories')->paginate(10);
        return Inertia::render('Admin/Audiobook/Index', ['karya' => $karya]);
    }

    public function create()
    {
        $category = CategoryModel::all();
        return Inertia::render('Admin/Audiobook/Create', ['categories' => $category]);
    }

    public function like($id)
    {
        DB::statement('CALL UpdateKaryaLikes(?)', [$id]);

        $likes = DB::table('karya_statistics')->where('karya_id', $id)->value('likes');
        return response()->json(['likes' => $likes]);
    }

    public function store(Request $request)
    {
        // Validate the request
        $validatedData = $request->validate([
            'judul_karya' => 'required|string|max:255',
            'penyunting' => 'required|string|max:255',
            'deskripsi_karya' => 'required|string',
            'status' => 'required',
            'categories' => 'required|array',
            'categories.*' => 'exists:category,id', // Ensure all selected categories exist in 'category' table
            'cover_karya' => 'nullable|file|mimes:jpg,jpeg,png|max:10000', // Handle file validation
            'ilustrasi_karya' => 'nullable|file|mimes:mp4|max:10000', // Handle file validation
        ]);

        // Generate slug from judul_karya
        $validatedData['slug'] = Str::slug($validatedData['judul_karya']);

        if ($request->hasFile('cover_karya')) {
            $filename = uniqid() . '_' . now()->format('Ymd') . '.' . $request->file('cover_karya')->getClientOriginalExtension();
            $path = $request->file('cover_karya')->storeAs('covers', $filename, 'public');
            $validatedData['cover_karya'] = Storage::url($path); // Generate correct public URL
        }

        if ($request->hasFile('ilustrasi_karya')) {
            $filename = uniqid() . '_' . now()->format('Ymd') . '.' . $request->file('ilustrasi_karya')->getClientOriginalExtension();
            $path = $request->file('ilustrasi_karya')->storeAs('ilustrasi', $filename, 'public');
            $validatedData['ilustrasi_karya'] = Storage::url($path); // Generate correct public URL
        }

        // Create the audiobook record
        $audiobook = KaryaModel::create([
            'judul_karya' => $validatedData['judul_karya'],
            'penyunting' => $validatedData['penyunting'],
            'deskripsi_karya' => $validatedData['deskripsi_karya'],
            'slug' => $validatedData['slug'], // Save the generated slug
            'status' => $validatedData['status'],
            'cover_karya' => $validatedData['cover_karya'] ?? null, // Handle optional image
            'ilustrasi_karya' => $validatedData['ilustrasi_karya'] ?? null,
        ]);

        // Attach categories to the audiobook
        if (!empty($validatedData['categories'])) {
            $audiobook->categories()->sync($validatedData['categories']);
        }

        return response()->json(['message' => 'Success', 'data' => $audiobook], 200);
    }

    public function edit($id)
    {
        $karya = KaryaModel::with('categories')->findOrFail($id);
        return Inertia::render('Admin/Audiobook/Edit', [
            'karya' => $karya,
            'categories' => CategoryModel::all(), // Fetch categories for selection
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'judul_karya' => 'required|string',
            'penyunting' => 'required|string',
            'deskripsi_karya' => 'required|string',
            'status' => 'required|string',
            'categories' => 'array', // Pastikan ini array
        ]);

        $karya = KaryaModel::findOrFail($id);
        $karya->update([
            'judul_karya' => $validated['judul_karya'],
            'penyunting' => $validated['penyunting'],
            'deskripsi_karya' => $validated['deskripsi_karya'],
            'status' => $validated['status'],
            'slug' => Str::slug($validated['judul_karya']),
        ]);

        // Pastikan hubungan kategori diperbarui melalui tabel pivot
        if ($request->has('categories')) {
            $karya->categories()->sync($validated['categories']);
        }

        return response()->json(['message' => 'Karya updated successfully']);
    }


    public function detail($id)
    {
        $karya = KaryaModel::with('categories')->findOrFail($id);
        return Inertia::render('Admin/Audiobook/Detail', ['karya' => $karya]);
    }

    public function showKarya($slug, $id)
    {
        $karya = KaryaModel::with([
            'chapters' => function ($query) {
                $query->orderBy('created_at'); // Order by oldest first
            },
            'statistic',
        ])
            ->where('id', $id)
            ->where('slug', $slug)
            ->firstOrFail();

        $ratings = RatingsModel::where('rateable_id', $id)
            ->where('rateable_type', 'App\Models\Karya')
            ->avg('rating');
        $ratingsCount = RatingsModel::where('rateable_id', $id)
            ->where('rateable_type', 'App\Models\Karya')
            ->count();
        $ratingsFormatted = number_format($ratings, 1, ',', '');

        $userRating = RatingsModel::where('rateable_id', $id)
            ->where('rateable_type', 'App\Models\Karya')
            ->where('user_id', Auth::id()) // Ambil rating user saat ini
            ->value('rating'); // Ambil langsung nilai rating (bukan object)

        $firstChapter = $karya->chapters->first();

        return Inertia::render('Audiobook/Show', [
            'karya' => $karya,
            'chapters' => $karya->chapters,
            'firstChapter' => $firstChapter,
            'views' => $karya->statistic->views ?? 0,
            'averageRating' => $ratingsFormatted,
            'userRating' => $userRating,
            'ratingsCount' => $ratingsCount,
        ]);
    }


    public function playChapter($slug, $id, $chapterId)
    {
        // Fetch the specific chapter along with the associated karya (work)
        $chapter = ChapterModel::with([
            'karya',
            'komentar' => function ($query) {
                $query->select('id', 'user_id', 'chapter_id', 'komentar', 'created_at') // Specify the fields you want for comments
                    ->with('user:id,username,profile_pict') // Eager load the user details (id and username)
                    ->get(); // Paginate the comments, adjust the number as needed
            }
        ])
            ->where('id', $chapterId)
            ->where('karya_id', $id)
            ->whereRelation('karya', 'slug', $slug)
            ->firstOrFail();

        // Find the previous chapter
        $prevChapter = ChapterModel::where('karya_id', $id)
            ->select('id')
            ->where('id', '<', $chapterId) // Get chapters with IDs less than the current one
            ->orderBy('id', 'desc') // Get the most recent smaller ID
            ->first('id');

        // Find the next chapter
        $nextChapter = ChapterModel::where('karya_id', $id)
            ->select('id')
            ->where('id', '>', $chapterId) // Get chapters with IDs greater than the current one
            ->orderBy('id', 'asc') // Get the next larger ID
            ->first();

        // views count
        $userId = Auth::id();
        $viewedKey = "viewed_karya_{$id}_user_{$userId}";

        if (!session()->has($viewedKey)) {
            DB::statement('CALL IncrementViews(?)', [$id]);

            // Store in session to prevent multiple counts
            session()->put($viewedKey, true);
        }

        return Inertia::render('Audiobook/Play', [
            'chapter' => $chapter,
            'prevChapter' => $prevChapter,
            'nextChapter' => $nextChapter,
            'comments' => $chapter->komentar,
        ]);
    }


    public function restore($id)
    {
        $audiobook = KaryaModel::onlyTrashed()->findOrFail($id);
        $audiobook->restore(); // Mengembalikan data
        return Inertia::location('/admin/trash');
    }

    public function softDelete($id)
    {
        $audiobook = KaryaModel::findOrFail($id);
        $audiobook->delete(); // Menghapus dengan soft delete
        return;
    }
    public function hardDelete($id)
    {
        $audiobook = KaryaModel::withTrashed()->findOrFail($id);

        if ($audiobook->cover_karya) {
            $filePath = str_replace('/storage', 'public', $audiobook->cover_karya);
            if (Storage::exists($filePath)) {
                Storage::delete($filePath); // Delete the file
            }
        }

        $audiobook->forceDelete();

        return;
    }

    public function deleteComments($id)
    {
        $comment = KomentarChapterModel::find($id);

        if (!$comment) {
            return response()->json(['message' => 'Comment not found'], 404);
        }

        if (Auth::id() !== $comment->user_id) return response()->json(['message' => 'Unauthorized'], 403);

        $comment->delete();

        return response()->json(['message' => 'Comment deleted successfully'], 200);
    }
}
