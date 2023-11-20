  import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GoToUrlService } from 'src/app/service/goToUrl/go-to-url.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public login: string = "";
  public password: string = "";
  @Input() isLogin: boolean = false;
  @Output() closeLogin: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() imgLogin: string = '';
  @Output() returnImgLogin: EventEmitter<string> = new EventEmitter<string>();

  constructor(private goToUrlService: GoToUrlService) { }

  public loginRequest() {
    this.goToUrlService.goToUrl('personal-area');
    this.closeLogin.emit(this.isLogin);

    this.returnImgLogin.emit(this.imgLogin);
  }

  SignOut() {
    this.goToUrlService.goToUrl('main');
    this.isLogin = !this.isLogin
    this.closeLogin.emit(this.isLogin);
  }
}
