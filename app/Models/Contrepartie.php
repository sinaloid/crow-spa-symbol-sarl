<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contrepartie extends Model
{
    use HasFactory;

    protected $fillable =[
        'montant_attendu',
        'desciption_court',
        'desciption_long',
        'projet_id',
    ];

    public function projet() {
        return $this->belongsTo(Projet::class);
    }
}
