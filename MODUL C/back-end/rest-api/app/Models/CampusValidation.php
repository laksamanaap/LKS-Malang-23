<?php

namespace App\Models;

use App\Models\User;
use App\Models\Campus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CampusValidation extends Model
{
    protected $table = 'campus_validation';
    protected $primaryKey = 'id';
    protected $guarded = [];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'id_users');
    }

    public function campus()
    {
        return $this->belongsTo(Campus::class, 'id_campus');
    }

    use HasFactory;
}
