<?php

namespace App\Http\Controllers;

use App\Models\KomentarModel;
use App\Models\KomunitasModel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index($id)
    {
        $user = User::findOrFail($id);

        // Fetch all posts from the user
        $post = KomunitasModel::where('user_id', $user->id)
            ->with('parent')
            ->withCount('likes')
            ->get();

        // Add comment count for each post
        $post->transform(function ($item) {
            // Count the comments for each Komunitas post
            $item->comment_count = KomunitasModel::where('parent_id', '=', $item->id)->count();
            return $item;
        });

        return Inertia::render('Profile', ['user' => $user, 'post' => $post]);
    }


    public function likes($id)
    {

    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $data = $request->only(['fullname', 'username', 'email', 'bio']);

        // Hapus file profile_pict lama jika ada file baru yang diunggah
        if ($request->hasFile('profile_pict')) {
            if ($user->profile_pict) {
                $oldFile = str_replace('/storage/', '', $user->profile_pict); // Path relatif di storage
                Storage::disk('public')->delete($oldFile);
            }

            $filename = uniqid() . '_' . now()->format('Ymd') . '.' . $request->file('profile_pict')->getClientOriginalExtension();
            $path = $request->file('profile_pict')->storeAs('profile_pict', $filename, 'public');
            $data['profile_pict'] = Storage::url($path);
        }

        // Hapus file cover_pict lama jika ada file baru yang diunggah
        if ($request->hasFile('cover_pict')) {
            if ($user->cover_pict) {
                $oldFile = str_replace('/storage/', '', $user->cover_pict);
                Storage::disk('public')->delete($oldFile);
            }

            $filename = uniqid() . '_' . now()->format('Ymd') . '.' . $request->file('cover_pict')->getClientOriginalExtension();
            $path = $request->file('cover_pict')->storeAs('cover_pict', $filename, 'public');
            $data['cover_pict'] = Storage::url($path);
        }

        // Update data user
        $user->update($data);

        return redirect()->back()->with('success', 'Profile updated successfully.');
    }

    public function deleteProfilePicture($id)
    {
        $user = User::findOrFail($id);

        if ($user->profile_pict) {
            $filePath = str_replace('/storage/', '', $user->profile_pict); // Convert public URL to storage path
            Storage::disk('public')->delete($filePath); // Delete file from storage
            $user->update(['profile_pict' => null]); // Remove reference in database
        }

        return redirect()->back()->with('success', 'Profile picture deleted successfully.');
    }

    public function deleteCoverPicture($id)
    {
        $user = User::findOrFail($id);

        if ($user->cover_pict) {
            $filePath = str_replace('/storage/', '', $user->cover_pict);
            Storage::disk('public')->delete($filePath);
            $user->update(['cover_pict' => null]);
        }

        return redirect()->back()->with('success', 'Cover picture deleted successfully.');
    }



}
