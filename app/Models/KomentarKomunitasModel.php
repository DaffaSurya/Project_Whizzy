<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class KomentarKomunitasModel extends Model
{
    protected $primaryKey = 'id';  // Set the primary key name to 'id'
    public $incrementing = false;  // Disable auto-increment
    protected $keyType = 'string'; // Set the key type to string

    // Automatically generate a random alphanumeric string for the id
    protected static function booted()
    {
        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = Str::random(16);
            }
        });
    }

    protected $table = 'komentar_komunitas';
    protected $guarded = [];
    public function parent()
    {
        return $this->belongsTo(KomentarKomunitasModel::class, 'parent_id');
    }

    public function replies()
    {
        return $this->hasMany(KomentarKomunitasModel::class, 'parent_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');

    }
}
