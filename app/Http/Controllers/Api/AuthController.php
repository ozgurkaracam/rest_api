<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try{
            $request->validate([
                'email'=>'required|email',
                'password'=>'required'
            ]);
            $credential=request(['email','password']);
            if(!Auth::attempt($credential)){
                return response()->json([
                    'status_code'=>500,
                    'message'=>'No Authentication'
                ]);
            }

            $user=Auth::user();
            $tokenResult=$user->createToken('authToken')->plainTextToken;
            return response()->json([
                'status_code'=>200,
                'access_token'=>$tokenResult,
                'token_type'=>'Bearer'
            ]);
        }catch ( \Exception $e){
            return response()->json([
                'status_code'=>500,
                'message'=>'No Auth',
                'error'=>$e
            ]);
        }
    }
}
