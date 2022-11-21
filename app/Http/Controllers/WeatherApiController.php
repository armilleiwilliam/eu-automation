<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeatherApiController extends Controller
{
    /**
     * Dashboard showing the weekly forecast by selected county
     */
    public function index()
    {
        return view('dashboard');
    }
}
