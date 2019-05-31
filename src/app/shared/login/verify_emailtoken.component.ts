import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  template: `
<div class="container">
	<div class="row" style="padding-top: 100px">
    <div class="col-md-6 col-md-offset-3">
      <div class="panel" [ngClass]="activationerror?'panel-danger':'panel-success'">
        <div class="panel-heading">
            <h3 class="panel-title">Verify Email:</h3>
        </div>
        <div class="panel-body">
          <p>{{message}}</p>
          &mdash; PyFlux
				</div>
			</div>
		</div>
	</div>
</div>`
  // styleUrls: ['./login.component.css']
})

export class VerifyEmailComponent implements OnInit {
  verificationkey: string;
  message: string;
  activationerror = true;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.verificationkey = this.route.snapshot.queryParamMap.get('key');
    this.auth.verifyEmail(this.verificationkey)
      .subscribe(response => {
        this.activationerror = false;
        this.message = response['message'];
        // console.log(JSON.stringify(response));
      },
        error => {
          this.activationerror = true;
          this.message = error.error.detail; // JSON.stringify(error.error);
        }
      );
  }
}
