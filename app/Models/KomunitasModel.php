<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class KomunitasModel extends Model
{
    protected $primaryKey = 'id';  // Set the primary key name to 'id'
    public $incrementing = false;  // Disable auto-increment
    protected $keyType = 'string'; // Set the key type to string

    protected $table = 'komunitas';
    protected $guarded = [];

    protected static function booted()
    {
        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = Str::random(16);
            }
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(KomunitasModel::class, 'parent_id', 'id');
    }

    public function parent()
    {
        return $this->belongsTo(KomunitasModel::class, 'parent_id');
    }

    // Define a relationship for likes
    public function likes()
    {
        return $this->hasMany(LikesModel::class, 'post_id');
    }


}
