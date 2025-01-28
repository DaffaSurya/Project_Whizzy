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
        Schema::create('komunitas', function (Blueprint $table) {
            $table->string('id', 16)->primary();

            $table->foreignId('user_id')->references('id')->on('users');
            $table->string('slug');
            $table->text('content');
            $table->text('attachment')->nullable();

            $table->string('parent_id', 16)->nullable();
            $table->foreign('parent_id')->references('id')->on('komunitas')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('komunitas');
    }
};
