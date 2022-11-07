<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ValidationRecommandation extends Model
{
    use HasFactory;

    protected $fillable = [
        'projet_id',
        'type'
    ];

    public function projet() {

        return $this->belongsTo(Projet::class);
    }
}
