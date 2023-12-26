<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CampusController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\MajorityController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('v1/register', [AuthController::class, 'registerUsers'])->name('registerUsers');
Route::post('v1/login', [AuthController::class, 'loginUsers'])->name('loginUsers');

Route::get('v1/show-all/campus', [CampusController::class, 'showAllCampus'])->name('showAllCampus');
Route::get('v1/show-all/majority', [CampusController::class, 'showAllCampus'])->name('showAllCampus');

Route::post('v1/store-campus-validation', [AuthController::class, 'storeCampusValidation'])->name('storeCampusValidation');
Route::get('v1/show-campus-validation', [AuthController::class, 'showCampusValidation'])->name('storeCampusValidation');

// Admin

// Campus
Route::post('v2/store-campus', [CampusController::class, 'storeCampus'])->name('storeCampus');
Route::get('v2/show-campus/{id}', [CampusController::class, 'showCampus'])->name('showCampus');
Route::put('v2/update-campus', [CampusController::class, 'updateCampus'])->name('updateCampus');
Route::delete('v2/delete-campus', [CampusController::class, 'deleteCampus'])->name('deleteCampus');

// Faculty
Route::post('v2/store-faculty', [FacultyController::class, 'storeFaculty'])->name('storeFaculty');
Route::get('v2/show-faculty/{id}', [FacultyController::class, 'showFaculty'])->name('showFaculty');
Route::put('v2/update-faculty', [FacultyController::class, 'updateFaculty'])->name('updateFaculty');
Route::delete('v2/delete-faculty', [FacultyController::class, 'deleteFaculty'])->name('deleteFaculty');

// Majority
Route::post('v2/store-majority', [MajorityController::class, 'storeMajority'])->name('storeMajority');
Route::get('v2/show-majority/{id}', [MajorityController::class, 'showMajority'])->name('showMajority');
Route::put('v2/update-majority', [MajorityController::class, 'updateMajority'])->name('updateMajority');
Route::delete('v2/delete-majority', [MajorityController::class, 'deleteMajority'])->name('deleteMajority');

// Change member Status


