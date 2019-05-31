import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent} from './shared/login/logout.component';
import { VerifyEmailComponent} from './shared/login/verify_emailtoken.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './modules/layout.module#LayoutModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './shared/login/login.module#LoginModule' },
  { path: 'logout', component: LogoutComponent },
  { path: 'verifyemail', component: VerifyEmailComponent },
  { path: 'errors', loadChildren: './shared/errorpages/errorpages.module#ErrorPagesModule'},
  { path: '**', redirectTo: 'errors'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
