<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChapterModel extends Model
{
    protected $table = 'chapter';
    protected $guarded = [];

    public function karya()
    {
        return $this->belongsTo(KaryaModel::class, 'karya_id');
    }

    public function komentar()
    {
        return $this->hasMany(KomentarChapterModel::class, 'chapter_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
