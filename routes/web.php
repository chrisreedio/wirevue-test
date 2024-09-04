<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/vue', function () {
    return view('vue');
});

Route::get('/inertia', function () {
    // return view('inertia');
    return Inertia::render('Index', [
        'php_version' => '8.2',
    ]);
});
