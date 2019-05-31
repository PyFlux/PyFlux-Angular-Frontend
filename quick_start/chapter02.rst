=============================
Chapter 2: Create Angular App
=============================

This tutorial is written with the help of [techie diaries](https://www.techiediaries.com/angular-tutorial/).

we are going to create a new angular app:

Create new Angular App or Clone
===============================

Create new Angular App
----------------------
::

	$ nvm use node
	$ ng new pyflux
	$ cd pyflux
	$ ng serve --open

or Clone existing app
---------------------
::

	$ git clone
	$ cd Pyflux-Angular
	$ npm install
	$ ng serve --open


Generate new app
----------------
::

	$ ng generate component AcademicYear
	$ ng generate component Courses

Adding Angular 6 Routing
========================

add a file `app-routing.module.ts`
----------------------------------

create new file `app/app-routing.module.ts`::

	import { NgModule } from '@angular/core';
	import { Routes, RouterModule } from '@angular/router';

	import { AcademicYearComponent }  from './academic-year/academic-year.component';

	import { CoursesComponent }  from './courses/courses.component';

	const routes: Routes = [
	{ path:  '', redirectTo:  'academicyear', pathMatch:  'full' },
	{path:  'academicyear', component:  AcademicYearComponent },
	{path:  'courses', component:  CoursesComponent }
	];

	@NgModule({
	  imports: [RouterModule.forRoot(routes)],
	  exports: [RouterModule]
	})
	export class AppRoutingModule { }


Now edit `app/app.module.ts` and import the routing module then add `AppRoutingModule` to the imports array::

	import {AppRoutingModule} from  './app-routing.module';
	...
	imports: [
    	BrowserModule,
    	AppRoutingModule
	],


add `<router-outlet></router-outlet>` in `app.component.html`
-------------------------------------------------------------

edit `app/app.component.html` then add the navigation links and the router outlet::

	<a [routerLink]="'/academicyear'"> Academic Year </a><br>
	<a [routerLink]="'/courses'"> Courses </a>
	<div>
    <router-outlet></router-outlet>
	</div>

REST api http requests
======================

edit file `app/app.module.ts` to add the `HttpClientModule` module(import the `HttpClientModule` then add `HttpClientModule` to the imports array)::

	import { HttpClientModule } from  '@angular/common/http';
	...
	imports: [
		...
		HttpClientModule
	],

Create an Angular 6 Service/Provider
------------------------------------

create a service that encapsulates all the code needed for interacting with the REST API::

	ng g service api

Getting Courses HTTP GET Request Example
----------------------------------------

Let's start with the courses API endpoint.

+ First we'll add a method to consume this endpoint in our global API service,
+ next we'll inject the API service and call the method from the corresponding component class (CoursesComponent)
+ and finally we'll display the result (the list of courses) in the component template.

Open `app/api.service.ts` then import and inject the `HttpClient` class::

	...
	import { HttpClient} from  '@angular/common/http';
	...
	export class ApiService {
		API_URL  =  'http://localhost:8000';
		constructor(private  httpClient:  HttpClient) {}
		getCourses(){
		    return this.httpClient.get(`${this.API_URL}/courses`);
		}
	}

Next, open `app/courses/courses.component.ts` and inject the `ApiService` then call the `getCourses()` method::

	...
	import { ApiService } from  '../api.service';
	...
	export class CoursesComponent implements OnInit {
		private  courses:  Array<object> = [];
		constructor(private  apiService:  ApiService) { }
		ngOnInit() {
			this.getCourses();
	  }
	  public  getCourses(){
		this.apiService.getCourses().subscribe((data:  Array<object>) => {
			this.courses  =  data;
			console.log(data);
		});
	  }
	}

Now let's display the courses in the template. Open `app/courses/courses.component.html` and add the following code::

	<h1>Courses </h1>
	<table  style="width:100%">
	<tr>
	    <th>Course Name</th>
	    <th>Course Code</th>
	    <th>Course Alias</th>
	    <th>Status</th>
	    <th>Created on</th>
	</tr>
	<tr *ngFor="let course of courses ">
	    <td> {{ course.course_name }} </td>
	    <td> {{ course.course_code }} </td>
	    <td> {{ course.course_alias }} </td>
	    <td> {{ course.status }} </td>
	    <td> {{ course.created_at }} </td>
	</tr>
	</table>

Creating Courses HTTP POST Request Example
------------------------------------------

Open `app/api.service.ts` and add a method::

	export class ApiService {
		...
		createCourse(course){
		    return  this.httpClient.post(`${this.API_URL}/courses/`,course);
		}
	}

open `app/courses/courses.component.ts` and update the following code::

	...
	export class CoursesComponent implements OnInit {
		...
		createCourse(){
			var  course  = {
				course_name: "Computer science",
				course_code: "mdscs800",
				course_alias: "CS80",
				status: 1
			};
			this.apiService.createCourse(course).subscribe((response) => {
			    console.log(response);
			});
		};
	}

Next open `app/courses/courses.component.html` and add a button to call the method to create a course::

	<h1>Courses </h1>
	<h2>Create Course</h2>
	<button (click)="createCourse()">Create Course</button><hr>
	...


