<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    use HasFactory;
    protected $fillable =[
        'libelle',
        'montant_attendu',
        'montant_recolte',
        'url_video',
        'nbr_contribution',
        'nbr_commentaire',
        'slogan',
        'date_debut',
        'date_fin',
        'description',
        'categorie_id',
        'user_id',
        'slug'
    ];

    public function categorie() {

        return $this->belongsTo(Categorie::class);
    }

    public function user() {

        return $this->belongsTo(User::class);
    }

    /*public function reduction() {

        return $this->hasOne(Reduction::class);
    }*/
    public function validationRecommandation() {

        return $this->hasOne(ValidationRecommandation::class);
    }

    public function images() {
        return $this->hasMany(Image::class);
    }

    public function detailProjets() {
        return $this->hasMany(DetailProjet::class);
    }

    public function contreparties() {
        return $this->hasMany(Contrepartie::class);
    }

    public function actualites() {
        return $this->hasMany(Actualite::class);
    }

    public function commentaires() {
        return $this->hasMany(Commentaires::class);
    }

    public function investissement() {
        return $this->hasMany(Investissement::class);
    }
}
