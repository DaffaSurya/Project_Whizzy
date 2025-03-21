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
        Schema::table('komentar_chapter', function (Blueprint $table) {
            // Hapus foreign key lama
            $table->dropForeign(['user_id']);
            $table->dropForeign(['chapter_id']);

            // Tambahkan foreign key baru dengan onDelete('cascade')
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('chapter_id')->references('id')->on('chapter')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('komentar_chapter', function (Blueprint $table) {
            // Hapus foreign key baru
            $table->dropForeign(['user_id']);
            $table->dropForeign(['chapter_id']);

            // Tambahkan kembali foreign key lama (tanpa onDelete cascade)
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('chapter_id')->references('id')->on('chapter');
        });
    }
};
