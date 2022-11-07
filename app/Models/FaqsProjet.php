<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FaqsProjet extends Model
{
    use HasFactory;

    protected $fillable = [
        'question',
        'response',
        'slug',
        'projet_id'
    ];
}
