Angular6 Authentication
=======================

http://www.pybloggers.com/2017/08/user-authentication-with-angular-4-and-flask/

Generate auth guard
-------------------

::

	ng g g auth

edit **app/auth.guard.ts**::

	import { Injectable } from '@angular/core';
	import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
	import { Observable } from 'rxjs';
	@Injectable({
	  providedIn: 'root'
	})
	export class AuthGuard implements CanActivate {
		constructor(private router: Router) { }
	  canActivate(
	    next: ActivatedRouteSnapshot,
	    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
	    	if (localStorage.getItem('currentUser')) {
	            // logged in so return true
	            return true;
	        }
	        // not logged in so redirect to login page with the return url
	        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
	        return false;
	  }
	}

update **app-routing.module.ts**::

	...
	import { LoginComponent } from './login/login.component';
	import { AuthGuard } from './auth.guard';
	const routes: Routes = [
		{ path: 'login', component: LoginComponent },
		{ path:  'academicyear', component:  AcademicYearComponent, canActivate: [AuthGuard]},
	...

Moving to Folder Stucture
=========================

https://medium.com/@motcowley/angular-folder-structure-d1809be95542

- app.module.ts
- app.component.ts
- modules
    - module1
       - components
       - pages
       module1.service.ts
       module1.module.ts
       module1.routes.ts

    - module2
       - components
       - pages
       module2.service.ts
       module2.module.ts
       module2.routes.ts
- shared
   - components
   - mocks
   - models
   - ...