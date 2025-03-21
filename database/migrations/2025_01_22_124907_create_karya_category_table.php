<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('karya_category', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->references('id')->on('category')->onDelete('cascade');
            $table->foreignId('karya_id')->references('id')->on('karya')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('karya_category');
    }
};
