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
        Schema::create('contreparties', function (Blueprint $table) {
            $table->id();
            $table->string('montant_attendu');
            $table->string('desciption_court');
            $table->text('desciption_long');
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
        Schema::dropIfExists('contreparties');
    }
};
