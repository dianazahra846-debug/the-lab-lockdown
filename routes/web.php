<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameShowcaseController;

/*
|--------------------------------------------------------------------------
| Web Routes - THE LAB LOCKDOWN (Official Showcase)
|--------------------------------------------------------------------------
|
| Rute resmi untuk website perkenalan game The Lab Lockdown (Game The Lab Lockdown).
|
*/

Route::get('/', [GameShowcaseController::class, 'home'])->name('home');
Route::get('/about', [GameShowcaseController::class, 'about'])->name('about');
Route::get('/gameplay', [GameShowcaseController::class, 'gameplay'])->name('gameplay');
Route::get('/levels', [GameShowcaseController::class, 'levels'])->name('levels');
Route::get('/features', [GameShowcaseController::class, 'features'])->name('features');
Route::get('/preview', [GameShowcaseController::class, 'preview'])->name('preview');
Route::get('/team', [GameShowcaseController::class, 'team'])->name('team');
