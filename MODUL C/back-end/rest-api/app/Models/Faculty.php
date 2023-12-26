<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    protected $table = 'faculty';
    protected $primaryKet = 'id_faculty';
    protected $guarded = [];

    use HasFactory;
}
