import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  email;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
    this.authService.user.subscribe(
      (user) => { 
        if(user){
          this.email = user.email;
        }
      }
    );
  }

  logout(){
    this.authService.logout();
  }

}
