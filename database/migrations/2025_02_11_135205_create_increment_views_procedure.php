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
        DB::unprepared("
            CREATE PROCEDURE IncrementViews(IN karyaId INT)
            BEGIN
                IF EXISTS (SELECT 1 FROM karya_statistic WHERE karya_id = karyaId) THEN
                    UPDATE karya_statistic 
                    SET views = views + 1
                    WHERE karya_id = karyaId;
                ELSE
                    INSERT INTO karya_statistic (karya_id, views, likes, created_at, updated_at)
                    VALUES (karyaId, 1, 0, NOW(), NOW());
                END IF;
            END
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared("DROP PROCEDURE IF EXISTS IncrementViews");
    }
};
