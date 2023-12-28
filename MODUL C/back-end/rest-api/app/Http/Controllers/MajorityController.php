<?php

namespace App\Http\Controllers;

use App\Models\Majority;
use Illuminate\Http\Request;
use App\Models\ImageMajority;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class MajorityController extends Controller
{
    // CRUD Admin Campus
    // Store
    public function storeMajority(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_campus' => 'required|integer',
            'type' => 'required|string',
            'name' => 'required|string',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $Majority = Majority::create([
            'id_campus' => $request->input('id_campus'),
            'type' => $request->input('type'),
            'name' => $request->input('name'),
            'description' => $request->input('description')
        ]);

        return response()->json(['data' => $Majority], 201);
    }


    // Update
    public function updateMajority(Request $request, $id_Majority)
    {
        $validator = Validator::make($request->all(), [
            'id_campus' => 'required|integer',
            'type' => 'required|string',
            'name' => 'required|string',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

         // Find the Majority by ID
        $Majority = Majority::find($id_Majority);

        if (!$Majority) {
            return response()->json(['error' => 'Majority not found'], 404);
        }

        // Update the Majority with the new data
        $Majority->update([
            'id_campus' => $request->input('id_campus'),
            'type' => $request->input('type'),
            'name' => $request->input('name'),
            'description' => $request->input('description')
        ]);

        return response()->json([
            'message' => 'success update Majority!',
            'data' => $Majority
        ], 200);

    }

    // Show Specific Majority
    public function showMajority($id_majority)
    {
        $majority = Majority::with('image_majority')
            ->find($id_majority);


        if ($majority) {
            return response()->json( $majority, 200);
        } else {
            return response()->json(['error' => 'No data Majority'], 404);
        }
    }

    // Delete Majority
    public function deleteMajority($id_Majority)
    {
        $Majority = Majority::destroy($id_Majority);

        if ($Majority === 0) {
             return response()->json(['error' => 'Majority not found'], 404);
        }

        return response()->json(['message' => "Majority with id ($id_Majority) deleted successfully"], 200);
    }

    // Store Majority Images
    public function storeMajorityImages(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_majority' => 'required|string',
            'images.*' => 'required|image:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $uploadFolders = 'majority';

        $idMajority = $request->input('id_majority');

        $image = $request->file('images');

        $imagePath = $image->store($uploadFolders, 'public');

        $imageModel = ImageMajority::create([
            'id_majority' => $idMajority,
            'icon' => Storage::disk('public')->url($imagePath),
        ]);

        $uploadImageResponse = [
            'image_name' => basename($imagePath),
            'image_url' => Storage::disk('public')->url($imagePath),
            'mime' => $image->getClientMimeType(),
            'id_images_majority' => $imageModel->id_images_campus,
        ];

        return response()->json([
            'message' => 'Image uploaded successfully',
            'data' => $uploadImageResponse
        ]);
    }
}
