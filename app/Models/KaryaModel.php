<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class KaryaModel extends Model
{
    use SoftDeletes;
    protected $table = 'karya';

    protected $guarded = [];

    protected $dates = ['deleted_at'];

    public function categories()
    {
        return $this->belongsToMany(CategoryModel::class, 'karya_category', 'karya_id', 'category_id');
    }

}
