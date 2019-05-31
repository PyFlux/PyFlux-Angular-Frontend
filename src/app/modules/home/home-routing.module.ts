import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'homepage', pathMatch: 'prefix' },
            { path: 'homepage', loadChildren: './homepage/homepage.module#HomepageModule'},
            { path: 'profilepage', loadChildren: './profilepage/profilepage.module#ProfilepageModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
