<?php

namespace App\Models;

use App\Models\Campus;
use App\Models\Majority;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Faculty extends Model
{
    protected $table = 'faculty';
    protected $primaryKey = 'id_faculty';
    protected $guarded = [];

    public $timestamps = false;

    public function campus()
    {
        return $this->belongsTo(Campus::class, 'id_campus');
    }

    public function majority()
    {
        return $this->hasMany(Majority::class, 'id_faculty', 'id_faculty');
    }


    use HasFactory;
}
