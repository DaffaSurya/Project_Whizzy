<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CategoryModel extends Model
{
    use SoftDeletes;
    protected $table = 'category';
    protected $guarded = [];
    protected $dates = ['deleted_at'];

    public function karya()
    {
        return $this->belongsToMany(KaryaModel::class, 'karya_category', 'category_id', 'karya_id');
    }

}
