<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projets', function (Blueprint $table) {
            $table->id();
            $table->string('libelle')->unique();;
            $table->string('montant_attendu');
            $table->string('montant_recolte')->default('0');
            $table->string('url_video')->nullable();
            $table->string('slogan')->nullable();
            $table->integer('nbr_contribution')->default('0');
            $table->integer('nbr_commentaire')->default('0');
            $table->Date('date_debut');
            $table->Date('date_fin');
            $table->text('description')->nullable();
            $table->string('slug');
            

            $table->unsignedBigInteger('categorie_id');
            $table->foreign('categorie_id')
                    ->references('id')
                    ->on('categories')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projets');
    }
};
