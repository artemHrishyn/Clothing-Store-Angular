import { Component } from '@angular/core';
import { GoToUrlService } from 'src/app/service/goToUrl/go-to-url.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
    public login: string = "";
    public password: string = "";

      constructor(
        private goToUrlService : GoToUrlService
  ) { }

  public loginRequest() {
    this.goToUrlService.goToUrl('personal-area');
  }
}
