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
        Schema::create('publicites', function (Blueprint $table) {
            $table->id();
            $table->string("image");
            $table->string("description")->nullable();
            $table->string("dure")->nullable();
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
        Schema::dropIfExists('publicites');
    }
};
