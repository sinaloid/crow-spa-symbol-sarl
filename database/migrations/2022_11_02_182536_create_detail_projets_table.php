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
        Schema::create('detail_projets', function (Blueprint $table) {
            $table->id();
            $table->text('a_propos')->nullable();
            $table->text('utilisation_financement')->nullable();
            $table->text('promoteurs')->nullable();
            $table->string("nom_image")->nullable();
            $table->timestamps();

            $table->unsignedBigInteger('projet_id')->unique();
            $table->foreign('projet_id')
                    ->references('id')
                    ->on('projets')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detail_projets');
    }
};
