<?php

namespace App\Models;

use App\Models\ImageMajority;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ImageMajority extends Model
{

    protected $table = 'images_majority';
    protected $guarded = [];
    protected $primaryKey = 'id_images_majority';

    

    use HasFactory;
}
