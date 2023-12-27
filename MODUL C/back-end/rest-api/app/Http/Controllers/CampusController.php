<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Campus;
use App\Models\Majority;
use Illuminate\Http\Request;
use App\Models\CampusValidation;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class CampusController extends Controller
{
    public function storeCampusValidation(Request $request)
    {
        $validator = Validator::make($request->all(), [
        'token' => 'required|string',
        'id_users' => 'required|integer',
        'id_campus' => 'required|integer',
    ]);

    // Check if validation fails
    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    // Retrieve User Token
    $inputToken = $request->input('token');
    $user = User::where('tokens', $inputToken)->first();

    if (!$user) {
        return response()->json(['error' => 'Invalid token'], 401);
    } else {
        $formFields = [
            'id_users' => $request->input('id_users'),
            'id_campus' => $request->input('id_campus'),
        ];

        if ($formFields['id_campus'] === null) {
            return response()->json(['Message' => 'Campus not found']);
        }

        // Using Instance
        $campusValidation = new CampusValidation($formFields);

        $campusValidation->save();
        $campusValidation->load('user','campus');

         return response()->json(['data' => $campusValidation]);
    }

    }

    // Show User Campus Validation
    public function showCampusValidation(Request $request)
    {

    $validator = Validator::make($request->all(), [
        'token' => 'required|string',
    ]);

    // Check if validation fails
    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    // Retrieve User Token
    $inputToken = $request->input('token');
    $user = User::where('tokens', $inputToken)->first();

        if (!$user) {
            return response()->json(['error' => 'Invalid token'], 401);
        } else {
            $campusValidation = CampusValidation::with('user','campus')->get();
            return response()->json(['data' => $campusValidation]);
        }
    }


    // Show All Campus
    public function showAllCampus()
    {
        $campus = Campus::all();

        if ($campus) {
            return response()->json(['data' => $campus]);
        } else {
            return response()->json(['error' => 'No data campus']);
        }
    }

    // Show All Majority
    public function showAllMajority()
    {
        $majority = Majority::all();

        if($majority) {
            return response()->json(['data' => $majority]);
        } else {
            return response()->json(['error' => 'No data campus']);
        }
    }


    // CRUD Admin Campus

    // Store
    public function storeCampus(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'token' => 'required|string',
            'type' => 'required|string',
            'name' => 'required|string',
            'description' => 'required|string',
            'accreditation' => 'required|string',
            'website' => 'required|string',
            'email' => 'required|string',
            'biaya' => 'required|string',
            'phone' => 'required|string',
        ]);

        if ($validator->fails()) {
             return response()->json(['error' => $validator->errors()], 400);
        }

         $campus = Campus::create([
            'type' => $request->input('type'),
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'accreditation' => $request->input('accreditation'),
            'website' => $request->input('website'),
            'email' => $request->input('email'),
            'biaya' => $request->input('biaya'),
            'phone' => $request->input('phone'),
         ]);

        return response()->json(['data' => $campus], 201);
    }

    // Update
    public function updateCampus(Request $request, $id_campus)
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required|string',
            'type' => 'required|string',
            'name' => 'required|string',
            'description' => 'required|string',
            'accreditation' => 'required|string',
            'website' => 'required|string',
            'email' => 'required|string',
            'biaya' => 'required|string',
            'phone' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

         // Find the campus by ID
        $campus = Campus::find($id_campus);

        if (!$campus) {
            return response()->json(['error' => 'Campus not found'], 404);
        }

        // Update the campus with the new data
        $campus->update([
            'type' => $request->input('type'),
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'accreditation' => $request->input('accreditation'),
            'website' => $request->input('website'),
            'email' => $request->input('email'),
            'biaya' => $request->input('biaya'),
            'phone' => $request->input('phone'),
        ]);

        return response()->json([
            'message' => 'success update campus!',
            'data' => $campus
        ], 200);

    }

    // Show Specific Campus
    public function ShowCampus($id_campus)
    {

        $campus = Campus::with('faculty','majority','image_campus')
        ->find($id_campus);

        if ($campus) {
            return response()->json(['data' => $campus],200);
        } else {
            return response()->json(['error' => 'No data campus']);
        }

    }

    // Delete Campus
    public function deleteCampus($id_campus)
    {
        $campus = Campus::destroy($id_campus);

        if ($campus === 0) {
             return response()->json(['error' => 'Campus not found'], 404);
        }

        return response()->json(['message' => "Campus with id ($id_campus) deleted successfully"], 200);
    }

    // Store Campus Image
    public function storeCampusImages(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'image' => 'required|image:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json([$validator->errors()]);
        }

        $uploadFolders = 'campus';

        $image = $request->file('image');
        $image_uploaded_path = $image->store($uploadFolders, 'public');

        $uploadImageResponse = [
            "image_name" => basename($image_uploaded_path),
            "image_url" => Storage::disk('public')->url($image_uploaded_path),
            "mime" => $image->getClientMimeType()
        ];

        return response()->json([
            'message' => 'Images upload succesfully',
            'data' => $uploadImageResponse
        ]);


    }
}
