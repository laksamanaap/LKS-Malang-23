<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageCampus extends Model
{

    protected $table = 'images_campus';
    protected $primaryKey = 'id_images_campus';
    protected $guarded = [];


    use HasFactory;
}
