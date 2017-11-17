import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/user.model'
import { AngularFireAuth } from 'angularfire2/auth'; // firebase
import * as firebase from 'firebase/app'; // firebase
import { ToastsManager } from 'ng2-toastr/ng2-toastr'; // toastr - display messages

@Injectable()
export class AuthService implements CanActivate{
    private headers: Headers;
    user: Observable<firebase.User>;
    
    constructor(private users: AngularFireAuth, private router: Router, public toastr: ToastsManager) {
        this.user = users.authState;
    }

    login(userData) {
        return this.users.auth
            .signInWithEmailAndPassword(userData.email, userData.password)
            .then(response => {
                this.toastr.success('Login successfully !', 'Success!');
                return true;
            })
            .catch(error => {
                this.toastr.error('Invalid login credentials!', null);
                console.log("service error", error);
            });
    }

    logout() {
        this.users.auth.signOut();
        console.log('Logout Successfully!');
        this.router.navigate(['/login']);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
       return this.users.authState.map(
           data => {
               if(data != null){
                   return true;
               }else{
                   this.router.navigate(['/login']);
                   return false;
               }
            }
        );
    };

}