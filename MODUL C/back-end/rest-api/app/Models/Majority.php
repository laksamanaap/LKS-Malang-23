<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Majority extends Model
{
    protected $table = 'majority';
    protected $primaryKey = 'id_majority';
    protected $guarded = [];

    public function image_majority()
    {
        return $this->hasMany(ImageMajority::class,'id_majority');
    }

    use HasFactory;
}
