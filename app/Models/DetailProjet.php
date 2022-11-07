<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailProjet extends Model
{
    use HasFactory;

    protected $fillable =[
        'a_propos',
        'utilisation_financement',
        'promoteurs',
        'nom_image',
        'projet_id'
    ];

    public function projet() {

        return $this->belongsTo(Projet::class);
    }


}
