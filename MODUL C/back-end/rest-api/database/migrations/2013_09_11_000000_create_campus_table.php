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
        Schema::create('campus', function (Blueprint $table) {
            $table->id('id_campus');
            $table->string('type');
            $table->string('name');
            $table->longText('description');
            $table->string('accreditation');
            $table->string('website');
            $table->string('email');
            $table->string('biaya')->default('Rp. 300.000');
            $table->integer('phone');
            $table->timestamps();
            $table->softDeletes(); // Add this line for soft deletes

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campus');
    }
};
