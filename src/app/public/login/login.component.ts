import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: User = new User();
  email: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(formData) {

    if (formData.valid) {
      let userData: User = Object.assign({}, this.user);
      userData.email = this.email.trim().toLowerCase();
      userData.password = this.password.trim();
      this.authService.login(userData)
        .then(response => {
          this.router.navigate(['/dashboard']);
        })
        .catch(error => {
          console.log("Login error");
        });
    }
    else {
      console.log("email and password fileds are mandatory");
    }
  }

  ngOnInit() {
    this.authService.user.subscribe(
      value => {
        //console.log(value);
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
