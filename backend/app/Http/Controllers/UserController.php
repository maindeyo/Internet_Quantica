<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;


class UserController extends Controller
{
    public function store(Request $request) {
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        $u = User::create(['name' => $name, 'email' => $email, 'password' => $password]);
        $u->save();

        return response(
            // ['location' => ('documentos.show'. $d->id())], 201
        );
    }

}
