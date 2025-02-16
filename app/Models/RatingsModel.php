<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RatingsModel extends Model
{
    protected $table = 'ratings';
    protected $guarded = [];

    public function rateable()
    {
        return $this->morphTo();
    }
}
