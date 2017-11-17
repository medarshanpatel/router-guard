import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { ProtectedComponent } from './protected/protected.component';
import { DashboardComponent } from './protected/dashboard/dashboard.component';
import { UsersComponent } from './protected/users/users.component';
import { EditorComponent } from './protected/editor/editor.component';
import { PaginationComponent } from './protected/pagination/pagination.component';
import { ScrollComponent } from './protected/scroll/scroll.component';

import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';

import { AuthService } from './auth/auth.service';


const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },

];
const PROTECTED_ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'summernote', component: EditorComponent },
    { path: 'pagination', component: PaginationComponent },
    { path: 'scroll', component: ScrollComponent },
    
];

const routes: Routes = [
    { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
    { path: '', component: ProtectedComponent, children: PROTECTED_ROUTES, canActivate: [AuthService] },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }