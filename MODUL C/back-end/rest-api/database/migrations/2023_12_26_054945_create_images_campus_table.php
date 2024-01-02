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
        Schema::create('images_campus', function (Blueprint $table) {
            $table->id('id_images_campus');
            $table->unsignedBigInteger('id_campus');
            $table->string('icon');
            $table->timestamps();

            // Soft deletes
            $table->foreign('id_campus')->references('id_campus')->on('campus')->onDelete('cascade');
        });
    }

    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images_campus');
    }
};
