<?php

namespace App\Models;

use App\Models\Campus;
use App\Models\Faculty;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Majority extends Model
{
    protected $table = 'majority';
    protected $primaryKey = 'id_majority';
    protected $guarded = [];

    public function image_majority()
    {
        return $this->hasMany(ImageMajority::class,'id_majority');
    }

    public function faculty()
    {
        return $this->hasOne(Faculty::class, 'id_faculty','id_faculty');
    }

    public function campus()
    {
        return $this->hasOne(Campus::class, 'id_campus','id_campus');
    }

    use HasFactory;
}
