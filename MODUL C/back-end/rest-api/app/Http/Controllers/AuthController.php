<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use App\Models\CampusValidation;
use Illuminate\Support\Facades\DB;
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

            if ($user->status === "0") {
                return response()->json(['error' => "User has been deactivated"]);
            } else {
                $token = $user->createToken('auth_token')->plainTextToken;
                $user->update(['tokens' => $token]);
                return response()->json( $user,200);
            }
            
        } else {
            return response()->json(['error' => 'Try to check your password or email!'],400);

        }

    }

    public function logoutUsers(Request $request)
    {

        $validator = Validator::make($request-> all(), [
            'token' => 'required|string'
        ]);

        $inputToken = $request->input('token');

        $societies = User::where('tokens', $inputToken)
        ->update(['tokens' => null]);

        return response()->json(['Message' => "Logout success!"]);
    }


    // 0 : Not Active
    // 1 : Active
    public function changeMemberStatus(Request $request, $id_users)
    {
        $validator = Validator::make($request->all(), [
            'status' => ['required', Rule::in([0, 1, 2])], // Validate that status is one of [0, 1, 2]
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $user = User::find($id_users);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $newStatus = $request->input('status');

        // Update the user's status
        $user->update(['status' => $newStatus]);

        return response()->json([
            'message' => 'User status updated successfully',
            'data' => $user,
        ], 200);
    }

    // 0 : Pending
    // 1 : Accepted
    // 2 : Rejected
    public function changeStudentStatus(Request $request)
    
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer',
            'status' => ['required', Rule::in([0, 1, 2])], // Validate that status is one of [0, 1, 2]
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $student = CampusValidation::with('user','campus')
        ->find($request->input('id'));

        if (!$student) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $newStatus = $request->input('status');

        // Update the user's status
        $student->update(['status' => $newStatus]);

        return response()->json([
            'message' => 'student status updated successfully',
            'data' => $student,
        ], 200);
    }

    // Sum all student registered
    public function sumStudentRegistered()
    {
        $studentCount = CampusValidation::count();

        return response()->json([
            'data' => [
                'total_registered_users' => $studentCount,
            ],
        ], 200);
    }

    // Sum all student status (accepted or rejected)
    public function sumStudentStatus()
    {

        $studentCountAccepted = CampusValidation::where('status',1)->count();
        $studentCountRejected = CampusValidation::where('status',0)->count();

        return response()->json([
            'data' => [
                'accepted_users' => $studentCountAccepted,
                'rejected_users' => $studentCountRejected,
            ],
        ], 200);

    }

}
