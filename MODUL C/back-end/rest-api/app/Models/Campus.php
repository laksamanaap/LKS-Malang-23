<?php

namespace App\Models;

use App\Models\Majority;
use App\Models\ImageCampus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Campus extends Model
{

    protected $table = 'campus';
    protected $primaryKey = 'id_campus';
    protected $guarded = [];

    public function faculty()
    {
        return $this->hasMany(Faculty::class, 'id_campus');
    }

    public function majority()
    {
        return $this->hasMany(Majority::class, 'id_campus');
    }

    public function image_campus()
    {
        return $this->hasMany(ImageCampus::class,'id_campus');
    }

    

    use HasFactory;
}
