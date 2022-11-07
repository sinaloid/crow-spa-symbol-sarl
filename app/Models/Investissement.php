<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Investissement extends Model
{
    use HasFactory;

    protected $fillable = [
        'numero_invest',
        'montant',
        'etat_commande',
        'slug',
        'user_id',
        'date',
        'projet_id'
    ];

    public function projet() {

        return $this->belongsTo(Projet::class);
    }

    public function user() {

        return $this->belongsTo(User::class);
    }
}
