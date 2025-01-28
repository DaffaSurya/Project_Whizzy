<?php

namespace Database\Seeders;

use App\Models\KaryaModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KaryaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create('id_ID');

        for ($i = 0; $i < 12; $i++) {
            KaryaModel::create([
                'judul_karya' => $faker->sentence,
                'penyunting' => $faker->name,
                'cover_karya' => 'https://placehold.co/400',
                'ilustrasi_karya' => $faker->imageUrl(640, 480, 'nature'),
                'deskripsi_karya' => $faker->paragraph,
                'status' => $faker->randomElement(['published', 'draft', 'archived']),
                'slug' => $faker->slug,
            ]);
        }
    }
}
