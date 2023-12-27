<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('faculty', function (Blueprint $table) {
            $table->id('id_faculty');
            $table->unsignedBigInteger('id_campus');
            $table->unsignedBigInteger('id_majority');
            $table->string('name');
            $table->string('description');
            $table->timestamps();

            $table->foreign('id_campus')->references('id_campus')->on('campus');
            $table->foreign('id_majority')->references('id_majority')->on('majority');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faculty');
    }
};
