import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model'
import { AuthService } from '../auth/auth.service'


import { AngularFireAuth } from 'angularfire2/auth'; // firebase
import * as firebase from 'firebase/app'; // firebase



@Injectable()
export class ProtectedService {
    

    constructor(private users: AngularFireAuth, private router: Router) { }

    logout() {
        this.users.auth.signOut();
        console.log('Logout Successfully!');
        this.router.navigate(['/login']);
    }

}
