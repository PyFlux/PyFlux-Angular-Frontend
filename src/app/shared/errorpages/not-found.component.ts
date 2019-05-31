import {Component, Inject, OnInit, Optional, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
// import {RESPONSE} from '@nguniversal/express-engine/tokens';
import {Response} from 'express';

@Component({
  selector: 'app-not-found',
  template: `
  <div id="notfound">
    <div class="notfound">
        <div class="notfound-404">
            <div></div>
            <h1>404</h1>
        </div>
        <h2>Page not found</h2>
        <p style="color: #fff">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <a href="#" [routerLink]="'/'"><i class="fa fa-home"></i> Take Me Home</a>
    </div>
  </div>`,
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

//   constructor(@Inject(PLATFORM_ID) private platformId: Object,
//               @Optional() @Inject(RESPONSE) private response: Response) {
//   }

  ngOnInit() {
    // if (!isPlatformBrowser(this.platformId)) {
    //   this.response.status(404);
    // }
  }

}
