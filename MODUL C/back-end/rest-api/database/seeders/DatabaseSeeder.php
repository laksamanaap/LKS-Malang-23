<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'first_name' => 'Test User',
        //     'last_name' => 'test@example.com',
        // ]);

         User::create([
            'first_name' => 'admin',
            'last_name' => 'kampus',
            'tanggal_lahir' => "1-2-05",
            'email' => 'admin@gmail.com',
            'role' => 'admin',
            'status' => 1,
            'password' => Hash::make('1234'),
        ]);
    }
}
