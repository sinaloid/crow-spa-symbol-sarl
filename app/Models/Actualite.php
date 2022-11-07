<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actualite extends Model
{
    use HasFactory;

    protected $fillable = [
        'actualite',
        'nom_image',
        'projet_id',
    ];

    public function projet() {
        return $this->belongsTo(Projet::class);
    }
}
