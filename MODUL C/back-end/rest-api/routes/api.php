<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\UserMiddleware;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Controllers\CampusController;
use App\Http\Controllers\SearchController;
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


// Auth
Route::post('v1/register', [AuthController::class, 'registerUsers'])->name('registerUsers');
Route::post('v1/login', [AuthController::class, 'loginUsers'])->name('loginUsers');
Route::post('v1/logout', [AuthController::class, 'logoutUsers'])->name('logoutUsers');

 
// Search
Route::get('/campus/search', [SearchController::class, 'search']);

Route::get('v1/show-all/campus', [CampusController::class, 'showAllCampus'])->name('showAllCampus');
Route::get('v1/show-all/majority', [CampusController::class, 'showAllMajority'])->name('showAllMajority');

Route::get('v2/show-campus/{id}', [CampusController::class, 'showCampus'])->name('showCampus');
Route::get('v2/show-majority/{id}', [MajorityController::class, 'showMajority'])->name('showMajority');

Route::middleware(UserMiddleware::class)->group(
    function() {
        
        Route::post('v1/store-campus-validation', [CampusController::class, 'storeCampusValidation'])->name('storeCampusValidation');
        Route::get('v1/show-campus-validation', [CampusController::class, 'showCampusValidation'])->name('storeCampusValidation');

        Route::get("v1/show-all-campus-validation", [CampusController::class, 'showAllCampusValidation'])->name('showAllCampusValidation');        
        Route::get("v1/show-accepted-campus-validation", [CampusController::class, 'showAcceptedCampusValidation'])->name('showAcceptedCampusValidation');
        Route::get("v1/show-student/{id}", [CampusController::class, 'showSpecificStudent'])->name('showSpecificStudent');

        Route::get('v1/show-campus/{id_campus}', [CampusController::class, 'showCampus'])->name('showCampus');
    }
);


// Admin Middleware
Route::middleware(AdminMiddleware::class)->group(
    function() {

        // Store Campus Image
        Route::post('v2/store-campus-image', [CampusController::class, 'storeCampusImages'])->name("storeCampusImages");
        Route::post('v2/edit-campus-image', [CampusController::class, 'editCampusImages'])->name("editCampusImages");

        // Campus
        Route::post('v2/store-campus', [CampusController::class, 'storeCampus'])->name('storeCampus');
        Route::put('v2/update-campus/{id}', [CampusController::class, 'updateCampus'])->name('updateCampus');
        Route::delete('v2/delete-campus-soft/{id_campus}', [CampusController::class, 'deleteCampusSoft']);

        // Faculty
        Route::post('v2/store-faculty', [FacultyController::class, 'storeFaculty'])->name('storeFaculty');
        Route::put('v2/update-faculty/{id}', [FacultyController::class, 'updateFaculty'])->name('updateFaculty');
        Route::get('v2/show-all-faculty', [FacultyController::class, 'showAllFaculty'])->name('showAllFaculty');
        Route::get('v2/show-faculty/{id}', [FacultyController::class, 'showFaculty'])->name('showFaculty');
        Route::delete('v2/delete-faculty/{id}', [FacultyController::class, 'deleteFacultySoft'])->name('deleteFacultySoft');

        // Store Majority Image
        Route::post('v2/store-majority-image', [MajorityController::class, 'storeMajorityImages'])->name("storeMajorityImages");

        // Majority
        Route::post('v2/store-majority', [MajorityController::class, 'storeMajority'])->name('storeMajority');
        Route::put('v2/update-majority/{id}', [MajorityController::class, 'updateMajority'])->name('updateMajority');
        Route::delete('v2/delete-majority/{id}', [MajorityController::class, 'deleteMajority'])->name('deleteMajority');

        // Show All Users
        Route::get('v2/show-all-users', [AuthController::class, 'showAllUsers'])->name('showAllUsers');
        Route::get('v2/show-user/{id}', [AuthController::class, 'showSpecificUser'])->name('showSpecificUser');

        
        // Adding up the total student
        Route::get('v2/all-student-registered', [AuthController::class, 'sumStudentRegistered'])->name('sumStudentRegistered');
    
        // Adding up the total student accepted or rejected
        Route::get('v2/student-status-count', [AuthController::class, 'sumStudentStatus'])->name('sumStudentStatus');

        // Change Member and student Status
        Route::put('v2/change-member-status', [AuthController::class, 'changeMemberStatus'])->name('changeMemberStatus');
        Route::put('v2/change-student-status', [AuthController::class, 'changeStudentStatus'])->name('changeStudentStatus');

        // Search student and member
        Route::get('v2/member/search', [SearchController::class, 'searchMember'])->name('searchMember');
        Route::get('v2/student/search', [SearchController::class, 'searchStudent'])->name('searchStudent');

    }
);






