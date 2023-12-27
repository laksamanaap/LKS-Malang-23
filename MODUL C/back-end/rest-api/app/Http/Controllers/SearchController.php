<?php

namespace App\Http\Controllers;

use App\Models\Campus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = DB::table('campus');

        if ($request->has('name')) {
            $query->where('name', 'like', '%' . $request->input('name') . '%');
        }

        $results = $query->get();

        return response()->json(['data' => $results]);
    }

    public function searchMember(Request $request)
    {

    }

    public function searchStudent(Request $request)
    {

    }
}
