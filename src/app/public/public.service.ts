import { Injectable } from '@angular/core';
/*import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model'

import { AngularFireAuth } from 'angularfire2/auth'; // firebase
import * as firebase from 'firebase/app'; // firebase

*/


@Injectable()
export class PublicService {
    /*private headers: Headers;
    user: Observable<firebase.User>;

    constructor(private users: AngularFireAuth, private router: Router) {
        this.user = users.authState;
    }

    login(userData) {
        return this.users.auth
            .signInWithEmailAndPassword(userData.email, userData.password)
            .then(response => {
                return true;
            })
            .catch(error => {
                console.log("service error", error);
            });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.users.auth.currentUser!=null;
    };*/

}