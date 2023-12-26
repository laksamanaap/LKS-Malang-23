<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Majority extends Model
{
    protected $table = 'majority';
    protected $primaryKet = 'id_majority';
    protected $guarded = [];

    use HasFactory;
}
