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
        Schema::create('images_majority', function (Blueprint $table) {
            $table->id('id_images_majority');
            $table->unsignedBigInteger('id_majority');
            $table->string('icon');
            $table->timestamps();

            $table->foreign('id_majority')->references('id_majority')->on('majority');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images_majority');
    }
};
