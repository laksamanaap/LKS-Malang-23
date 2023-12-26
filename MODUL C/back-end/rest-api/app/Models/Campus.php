<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campus extends Model
{

    protected $table = 'campus';
    protected $primaryKet = 'id_campus';
    protected $guarded = [];


    use HasFactory;
}
