import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatButtonModule, MatInputModule } from '@angular/material';


@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, EditorModule, MatButtonModule, MatInputModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
