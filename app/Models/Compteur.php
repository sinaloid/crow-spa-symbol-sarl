<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compteur extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_user',
        'nombre_invest',
        'nombre_financement_teminer',
        'nombre_financement_en_cours',
        'nombre_categorie',
        'nombre_projet',
        'nombre_investisseur',
        'nombre_promoteur',
        'nombre_administrateur',
    ];
}
