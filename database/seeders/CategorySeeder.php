<?php

namespace Database\Seeders;

use App\Models\CategoryModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Cerita Pendek',
            'ChickLit',
            'Fantasi',
            'Fiksi Ilmiah',
            'Fiksi Penggemar',
            'Fiksi Remaja',
            'Fiksi Sejarah',
            'Fiksi Umum',
            'Getaran',
            'Horor',
            'Humor',
            'Klasik',
            'Laga',
            'Manusia Serigala',
            'Misteri',
            'Non-Fiksi',
            'Paranormal',
            'Petualangan',
            'Puisi',
            'Roman',
            'Spiritual',
            'Vampir',
        ];

        foreach ($categories as $category) {
            CategoryModel::insert([
                'nama_kategori' => $category,
                'created_at' => now(),
            ]);
        }
    }
}
