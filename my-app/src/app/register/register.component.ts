import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'my-app';
  register;
  accountActive: boolean;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.accountActive = false;
    this.register = {
      email: '',
      username: '',
      password: ''

    };

  }

  reg() {
    return ('Hey')

  }



  registeruser() {
    this.userService.registerUser(this.register).subscribe(
      response => {
        alert('User ' + this.register.username + 'has been created')
        this.register = {
          email: '',
          username: '',
          password: ''
         };
         this.router.navigateByUrl("/login")
      },
      error => console.log('error', error)


    );



  }
  onLogin(event: Event) {
    console.log("this was clicked", event);
    this.accountActive = true;

    this.router.navigate(['/login']);
  }
}
