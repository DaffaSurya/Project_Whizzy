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

        $posts = KomunitasModel::where('user_id', $id)
            ->with(['parent'])
            ->withCount(['likes', 'comments as comment_count']) // Count comments efficiently
            ->latest()
            ->get();

        return Inertia::render('Profile', [
            'user' => $user,
            'post' => $posts
        ]);

    }


    public function likes($id)
    {

    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $validatedData = $request->validate([
            'fullname' => 'nullable|string|max:255',
            'username' => 'nullable|string|max:50|unique:users,username,' . $id,
            'email' => 'nullable|email|max:255|unique:users,email,' . $id,
            'bio' => 'nullable|string|max:500',
            'profile_pict' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'cover_pict' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Bersihkan input teks dengan strip_tags
        $validatedData['fullname'] = isset($validatedData['fullname']) ? strip_tags($validatedData['fullname']) : null;
        $validatedData['username'] = isset($validatedData['username']) ? strip_tags($validatedData['username']) : null;
        $validatedData['email'] = isset($validatedData['email']) ? strip_tags($validatedData['email']) : null;
        $validatedData['bio'] = isset($validatedData['bio']) ? strip_tags($validatedData['bio']) : null;

        // Hapus file profile_pict lama jika ada file baru yang diunggah
        if ($request->hasFile('profile_pict')) {
            $validatedData['profile_pict'] = $this->handleFileUpload($request->file('profile_pict'), $user->profile_pict, 'profile_pict');
        }

        // Hapus file cover_pict lama jika ada file baru yang diunggah
        if ($request->hasFile('cover_pict')) {
            $validatedData['cover_pict'] = $this->handleFileUpload($request->file('cover_pict'), $user->cover_pict, 'cover_pict');
        }

        // Update data user
        $user->update($validatedData);

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

    private function handleFileUpload($file, $oldFilePath, $folder)
    {
        // Delete old file if exists
        if ($oldFilePath) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $oldFilePath));
        }

        // Generate unique filename
        $filename = uniqid() . '_' . now()->format('Ymd') . '.' . $file->getClientOriginalExtension();

        // Store the file and return its public URL
        return Storage::url($file->storeAs($folder, $filename, 'public'));
    }

}
