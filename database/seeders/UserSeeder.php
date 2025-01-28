<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'fullname' => 'Admin User',
            'username' => 'adminuser',
            'role_id' => '2', // admin
            'email' => 'admin@gmail.com',
            'password' => bcrypt('1234567890')
        ]);

        for ($i = 1; $i <= 11; $i++) {
            User::create([
                'fullname' => 'User ' . $i,
                'username' => 'user' . $i,
                'role_id' => 3,  // Regular user role ID (adjust if needed)
                'email' => 'user' . $i . '@example.com',
                'password' => bcrypt('password' . $i)  // Example password
            ]);
        }
    }
}
