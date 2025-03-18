<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::unprepared("DROP PROCEDURE IF EXISTS InsertVisit");
        
        DB::unprepared("
        CREATE PROCEDURE InsertVisit(
            IN userAgent VARCHAR(255),
            IN visitCount INT,
            IN country VARCHAR(255),
            IN city VARCHAR(255)
        )
        BEGIN
            INSERT INTO statistic (user_agent, visits, country, city, created_at, updated_at)
            VALUES (userAgent, visitCount, country, city, NOW(), NOW());
        END
    ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared("DROP PROCEDURE InsertVisit");
    }
};
