<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MarkahModel extends Model
{
    protected $table = 'markah';
    protected $guarded = [];

    public function karya()
    {
        return $this->belongsTo(KaryaModel::class, 'karya_id');
    }
}
