import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {AuthService} from './login/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { SharedService } from './shared.service';
import * as NProgress from 'nprogress';
import { environment } from '../../environments/environment';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const serverurl = environment.serverUrl;
    const loaderexceptionurl = [
      serverurl + '/communications/chat/',
      serverurl + '/parent/querystudentsbyterm/',
      serverurl + '/datatable_json/',
      serverurl + '/communications/markasread/', // when user is active & messages appended to that user through socket io
      serverurl + '/notifications/notifications/',
    ];
    // add api url for every request
    // https://api.helpservice.xyz
    req = req.clone({url: serverurl + req.url});

    // add authorization header with jwt token if available
    const idToken = localStorage.getItem('token');
    if (idToken) {
      req = req.clone({
        headers: req.headers.set('Authorization',
          'Token ' + idToken)
      });
    }
    const overlayElement = document.getElementById('overlay');
    // don't show spinner if on chat window.
    // alert(req.url);
    if (loaderexceptionurl.indexOf(req.url) === -1) {
      // Spinner, Loader and Overlay
      NProgress.configure({showSpinner: false});
      NProgress.start();      
      if (overlayElement) {
        overlayElement.style.display = 'block';
      }
      // End of Spinner, Loader and Overlay
    }
    return next.handle(req).pipe(
      catchError(err => {
        if (err.status === 503) {
          // site is under maintenance
          this.auth.logout();
          this.router.navigate(['/errors/maintenance/']);
        } else if (err.status === 401) {
          // auto logout if 401 response returned from api
          // this.authenticationService.logout();
          this.auth.logout();
          location.reload(true);
        }
        // const error = err.error.message || err.statusText;
        return throwError(err);
      }),
      tap((event: HttpEvent<any>) => {
          // https://medium.com/@zeljkoradic/loader-bar-on-every-http-request-in-angular-6-60d8572a21a9
          if (event instanceof HttpResponse) {
            NProgress.done();
            if (overlayElement) {
              overlayElement.style.display = 'none';
            }
          }
        },
        (err: any) => {
          NProgress.done();
          if (overlayElement) {
            overlayElement.style.display = 'none';
          }
        }
      )
    );
  }
}
