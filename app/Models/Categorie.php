<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;

    protected $fillable =[
        'nom_categorie',
        'nombre_produit',
        'slug'
    ];

    public function products() {

        return $this->hasMany(Product::class);
    }
}
