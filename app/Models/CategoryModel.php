<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
    protected $table = 'category';

    protected $guarded = [];

    public function karya()
    {
        return $this->belongsToMany(KaryaModel::class, 'karya_category', 'category_id', 'karya_id');
    }

}
