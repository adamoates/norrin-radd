<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        // Define gates for invitation management
        Gate::define('invite-users', function ($user) {
            return $user->hasRole('admin');
        });

        Gate::define('manage-invitations', function ($user) {
            return $user->hasRole('admin');
        });

        Gate::define('view-invitations', function ($user) {
            return $user->hasAnyRole(['admin', 'editor']);
        });
    }
}
