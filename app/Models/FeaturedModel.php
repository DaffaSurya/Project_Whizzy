<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeaturedModel extends Model
{
    protected $table = 'featured';

    protected $guarded = [];

    public function karya()
    {
        return $this->belongsTo(KaryaModel::class, 'featured_audiobook');
    }
}
