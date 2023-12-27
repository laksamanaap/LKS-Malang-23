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
        Schema::create('users', function (Blueprint $table) {
            $table->id('id_users');
            $table->unsignedBigInteger('id_campus')->nullable();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('tanggal_lahir');
            $table->string('email')->unique();
            $table->string('role')->default('user');
            $table->string('status')->default('1');
            $table->string('password');
            $table->longText('tokens')->nullable();

            $table->foreign('id_campus')->references('id_campus')->on('campus');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
