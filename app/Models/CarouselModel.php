<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CarouselModel extends Model
{
    protected $table = 'carousel';
    protected $guarded = [];

    public function karya()
    {
        return $this->belongsTo(KaryaModel::class, 'karya_id');
    }
}
