<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KomentarChapterModel extends Model
{
    protected $table = 'komentar_chapter';
    protected $guarded = [];

    public function chapter()
    {
        return $this->belongsTo(ChapterModel::class, 'chapter_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
