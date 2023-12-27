<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $inputToken = $request->input('token');
        
        $user = User::where('tokens', $inputToken)->first();

        if (!$user) {
            return response()->json(['error' => 'Unathorized User'], 401);
        }

        return $next($request);
    }
}
