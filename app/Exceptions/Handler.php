<?php

namespace App\Exceptions;

use Dotenv\Exception\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Exceptions\ThrottleRequestsException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
//            return 'asdasd';
        });
//        $this->reportable(function (ValidationException $e){
//           return 'sadasd';
//        });
    }
    public function render($request, Throwable $e)
    {
        if($e instanceof \Illuminate\Validation\ValidationException)
            return response(['status'=>'error','errors'=>$e->errors()]);
        if($e instanceof AuthorizationException)
            return response(['status'=>'error','errors'=>$e->getMessage()]);
        if($e instanceof AuthenticationException)
            return response(['status'=>'error','errors'=>$e->getMessage()]);
        if($e instanceof  ThrottleRequestsException)
            return response(['status'=>'error','errors'=>$e->getMessage()]);
        return parent::render($request, $e); // TODO: Change the autogenerated stub
    }
}
