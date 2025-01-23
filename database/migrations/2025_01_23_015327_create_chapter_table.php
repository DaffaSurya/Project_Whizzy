<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chapter', function (Blueprint $table) {
            $table->id();
            $table->string('judul_chapter');
            $table->foreignId('karya_id')->references('id')->on('karya');
            $table->string('status');
            $table->string('audio_file');
            $table->string('video_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chapter');
    }
};
