import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemConfigComponent } from './systemconfig.component';

const routes: Routes = [
    {
        path: '',
        component: SystemConfigComponent,
        children: [
            // { path: '', redirectTo: 'student', pathMatch: 'prefix' },
            { path: 'organization', loadChildren: './organization/organization.module#OrganizationModule'},
            { path: 'country', loadChildren: './country/country.module#CountryModule'},
            { path: 'state', loadChildren: './state/state.module#StateModule'},
            { path: 'district', loadChildren: './district/district.module#DistrictModule'},
            { path: 'religion', loadChildren: './religion/religion.module#ReligionModule'},
            { path: 'relationship', loadChildren: './relationship/relationship.module#RelationshipModule'},
            { path: 'occupation', loadChildren: './occupation/occupation.module#OccupationModule'},
            { path: 'citytown', loadChildren: './citytown/citytown.module#CitytownModule'},
            { path: 'languages', loadChildren: './languages/languages.module#LanguagesModule'},
            { path: 'nationality', loadChildren: './nationality/nationality.module#NationalityModule'},
            { path: 'emailconfig', loadChildren: './emailconfig/emailconfig.module#EmailconfigModule'},
            { path: 'smsconfig', loadChildren: './smsconfig/smsconfig.module#SmsconfigModule'},
            { path: 'hobbies', loadChildren: './hobbies/hobbies.module#HobbiesModule'},
            { path: 'emailcredentials', loadChildren: './emailcredentials/emailcredentials.module#EmailcredentialsModule'},
            { path: 'smscredentials', loadChildren: './smscredentials/smscredentials.module#SmscredentialsModule'},
            { path: 'caste', loadChildren: './caste/caste.module#CasteModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemConfigRoutingModule {}
