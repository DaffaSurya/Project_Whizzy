<?php

namespace Database\Seeders;

use App\Models\KomunitasModel;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class KomunitasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Get all users from the database (assuming users already exist)
        $users = User::all();

        // Instantiate Faker
        $faker = Faker::create();

        // Get all users from the database (assuming users already exist)
        $users = User::all();

        for ($i = 1; $i <= 100; $i++) {
            // Randomly pick a user_id from existing users
            $user = $users->random();

            // Check if there are any existing Komunitas to use as parent
            $parent = KomunitasModel::inRandomOrder()->first();

            // Randomly decide if this komunitas has a parent (50% chance)
            $parent_id = $parent ? $parent->id : null;

            KomunitasModel::create([
                'id' => Str::random(16),  // Random 16-character ID
                'user_id' => $user->id,  // Random user ID
                'slug' => 'komunitas-' . Str::slug($faker->sentence(3)),  // Generate slug from a fake sentence
                'content' => $faker->paragraph,  // Generate random content (paragraph)
                // 'attachment' => rand(0, 1) ? $faker->imageUrl(150, 150) : null,  // Random image URL or null
                'parent_id' => $parent_id,  // Set parent_id if it exists
            ]);
        }
    }
}
