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
        Schema::create('majority', function (Blueprint $table) {
            $table->id('id_majority');
            $table->unsignedBigInteger('id_campus');
            $table->unsignedBigInteger('id_faculty');
            $table->string('type');
            $table->string('name');
            $table->longText('description');
            $table->timestamps();

            $table->foreign('id_campus')->references('id_campus')->on('campus')->onDelete('cascade');
            $table->foreign('id_faculty')->references('id_faculty')->on('faculty')->onDelete('cascade');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('majority');
    }
};
