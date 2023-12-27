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
            $table->string('type');
            $table->string('name');
            $table->longText('description');
            $table->timestamps();

            $table->foreign('id_campus')->references('id_campus')->on('campus');
            
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
