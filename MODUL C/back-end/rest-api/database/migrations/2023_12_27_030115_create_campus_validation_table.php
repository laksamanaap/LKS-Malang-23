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
        Schema::create('campus_validation', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_users');
            $table->unsignedBigInteger('id_campus');
            $table->unsignedBigInteger('id_faculty');
            $table->integer('status')->default(0);
            $table->timestamps();

            $table->foreign('id_users')->references('id_users')->on('users');
            $table->foreign('id_campus')->references('id_campus')->on('campus');
            $table->foreign('id_faculty')->references('id_faculty')->on('faculty');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campus_validation');
    }
};
