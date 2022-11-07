<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ProjetController;


Route::get('/vendeur/products', [ProjetController::class, 'index'])->middleware('api.vendeur')->name('vendeur.products');
