<?php

namespace Database\Seeders;

use App\Models\ChapterModel;
use App\Models\KaryaModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChapterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Get all karya (assuming there are already some karya in the database)
        $karyas = KaryaModel::all();

        foreach ($karyas as $karya) {
            // Random number of chapters between 1 and 12
            $chapterCount = rand(1, 12);

            for ($i = 1; $i <= $chapterCount; $i++) {
                ChapterModel::create([
                    'judul_chapter' => 'Chapter ' . $i . ': ' . 'Chapter Title ' . $i,
                    'karya_id' => $karya->id,  // Assign current karya_id
                    'status' => $i % 2 == 0 ? 'published' : 'draft',  // Alternating between 'published' and 'draft'
                    'audio_file' => 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
                    'ilustrasi_karya' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',  // Example path for illustrations
                ]);
            }
        }
    }
}
