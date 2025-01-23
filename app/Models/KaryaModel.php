<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KaryaModel extends Model
{
    protected $table = 'karya';

    protected $guarded = [];

    public function categories()
    {
        return $this->belongsToMany(CategoryModel::class, 'karya_category', 'karya_id', 'category_id');
    }

}
