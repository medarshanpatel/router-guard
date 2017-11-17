import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // toastr-display messages
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdCheckboxModule, MdProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2'; // firebase
import { AngularFireDatabaseModule } from 'angularfire2/database'; // firebase
import { AngularFireAuthModule } from 'angularfire2/auth'; // firebase
import { environment } from '../environments/environment'; // firebase

import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';

import { ProtectedComponent } from './protected/protected.component';
import { DashboardComponent } from './protected/dashboard/dashboard.component';
import { UsersComponent } from './protected/users/users.component';
import { EditorComponent } from './protected/editor/editor.component';
import { PaginationComponent } from './protected/pagination/pagination.component';
import { ScrollComponent } from './protected/scroll/scroll.component';

import { ToastModule } from 'ng2-toastr/ng2-toastr'; // toastr-display messages

import { AuthService } from './auth/auth.service';

import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';

import { NgxPaginationModule } from 'ngx-pagination';

import { NgSlimScrollModule } from 'ngx-slimscroll';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicComponent,
    ProtectedComponent,
    DashboardComponent,
    UsersComponent,
    EditorComponent,
    Ng2Summernote,
    PaginationComponent,
    ScrollComponent
  ],
  imports: [
    NgSlimScrollModule,
    CommonModule,
    NgxPaginationModule,
    MdProgressSpinnerModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    MdCheckboxModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MdButtonModule,
    ToastModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }