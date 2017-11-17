import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth'; // firebase
import * as firebase from 'firebase/app'; // firebase

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  isNotLoggedIn?: boolean;

  constructor(private users: AngularFireAuth, private router: Router) {
    this.isNotLoggedIn = false;
  }

  ngOnInit() {
    this.users.authState.subscribe(
      value => {
        if (value) {
          this.isNotLoggedIn =false;
          this.router.navigate(['/dashboard']);
          console.log("Successfully Login");
        } else {
          this.isNotLoggedIn =true;
          this.router.navigate(['/login']);
          console.log("Not login");
        }
      },
      error => {
        console.error(error);
      },
      () => {
        console.log("Completed");
      }
    );
  }
}
