<?php

namespace App\Http\Controllers;

use App\Models\Faculty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FacultyController extends Controller
{
     // CRUD Admin Campus

    // Store
    public function storeFaculty(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_campus' => 'required|integer',
            'name' => 'required|string',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $faculty = Faculty::create([
            'id_campus' => $request->input('id_campus'),
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);

        return response()->json(['data' => $faculty], 201);
    }


    // Update
    public function updateFaculty(Request $request, $id_faculty)
    {
        $validator = Validator::make($request->all(), [
            'id_campus' => 'required|integer',
            'name' => 'string',
            'description' => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

         // Find the Faculty by ID
        $Faculty = Faculty::find($id_faculty);

        if (!$Faculty) {
            return response()->json(['error' => 'Faculty not found'], 404);
        }

        // Update the Faculty with the new data
        $Faculty->update([
            'id_campus' => $request->input('id_campus'),
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);

        return response()->json([
            'message' => 'success update Faculty!',
            'data' => $Faculty
        ], 200);

    }

    // Show Specific Faculty
    public function ShowFaculty($id_Faculty)
    {

        $Faculty = Faculty::with('campus','majority')
        ->find($id_Faculty);

        if ($Faculty) {
            return response()->json(['data' => $Faculty],200);
        } else {
            return response()->json(['error' => 'No data Faculty']);
        }

    }

    // Show All Faculty
    public function showAllFaculty(Request $request)
    {

        $Faculty = Faculty::with('campus','majority')->get();

        if ($Faculty) {
            return response()->json(['data' => $Faculty],200);
        } else {
            return response()->json(['error' => 'No data Faculty']);
        }

    }

    // // Delete Faculty
    // public function deleteFaculty($id_Faculty)
    // {
    //     $Faculty = Faculty::destroy($id_Faculty);

    //     if ($Faculty === 0) {
    //          return response()->json(['error' => 'Faculty not found'], 404);
    //     }

    //     return response()->json(['message' => "Faculty with id ($id_Faculty) deleted successfully"], 200);
    // }

    public function deleteFacultySoft($id_faculty)
    {
        $faculty = Faculty::find($id_faculty);

        if (!$faculty) {
            return response()->json(['error' => 'faculty not found'], 404);
        }

        // Soft delete the faculty
        $faculty->delete();

        return response()->json(['message' => "faculty with id ($id_faculty) soft-deleted successfully"], 200);
    }
}
