<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function registerUsers(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'tanggal_lahir' => 'required|string',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([$validator->errors()], 400);
        }

        $formFields = $validator->validated();

        $formFields['password'] = Hash::make($request->input('password'));

        if (User::where('email', $formFields['email'])->exists()) {
            return response()->json(['error' => 'Email already in use!'],400);
        }

        $user = User::create($formFields);

        return response()->json([
            'message' => 'Register Success',
            'data' => $user,
        ]);

    }


    public function loginUsers(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([$validator->errors()], 400);
        }

        $credentials = $request->only('email','password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            $token = $user->createToken('auth_token')->plainTextToken;
            $user->update(['tokens' => $token]);
            
            return response()->json(['data' => $user],200);
        } else {
            return response()->json(['Error' => 'Login Error!'],400);

        }

    }
}
