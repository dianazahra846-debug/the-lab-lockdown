<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameShowcaseController extends Controller
{
    /**
     * Display the official showcase Home page.
     */
    public function home()
    {
        return view('home');
    }

    /**
     * Display the About page with game concept and objective.
     */
    public function about()
    {
        return view('about');
    }

    /**
     * Display the visual gameplay flow (EXPLORE -> INTERACT -> SOLVE -> ANSWER -> ESCAPE).
     */
    public function gameplay()
    {
        return view('gameplay');
    }

    /**
     * Display the 3 levels and question challenges.
     */
    public function levels()
    {
        return view('levels');
    }

    /**
     * Display the 6 key features and game flow timeline.
     */
    public function features()
    {
        return view('features');
    }

    /**
     * Display the mockup gallery with category filters and modal.
     */
    public function preview()
    {
        return view('preview');
    }

    /**
     * Display the development team and status section.
     */
    public function team()
    {
        return view('team');
    }
}
