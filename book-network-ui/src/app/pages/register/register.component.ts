import {Component} from '@angular/core';
import {RegistrationRequest} from "../../services/models/registration-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerRequest: RegistrationRequest = {email: '', firstName: '', lastName: '', password: ''};
  errorMessage: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  register() {
    this.errorMessage = [];
    this.authService.register({
      body: this.registerRequest
    }).subscribe(
      {
        next: () => {
          this.router.navigate(['activate-account'])
        },
        error: (err) => {
          this.errorMessage = err.error.validationErrors;
        }
      }
    )
  }

  login() {
    this.router.navigate(['login']);
  }
}
