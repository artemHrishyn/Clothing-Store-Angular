  import { Component } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [
      './header.component.scss',
      './media.scss',
    ]
  })
  export class HeaderComponent {

      constructor(
      private routing: Router,
    ) {}

    public isShowMenu: boolean = false;
    public isLogin: boolean = false;

    public userImg: string = "assets/image/icon/user.svg";

    public showMiniMenu():void {
      this.isShowMenu = !this.isShowMenu;
    }

    public loginShow(): void {
      if (this.userImg === 'assets/image/icon/user.svg')
      {
        this.isLogin = !this.isLogin;
      }
    }

    public goToUrl(value: string) {
      this.isLogin = false;
      this.routing.navigate([value]);
    }

    public loginRequest() {
      this.goToUrl('personal-area');
    }

    private validatePassword(password: string): boolean {
      const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
      return passwordRegex.test(password);
    }
  }

  // const passwordValid: boolean = this.validatePassword(this.password);
  // console.log(passwordValid);


  // if (this.login === "admin" && this.password === "admin")
  // {
  //   this.userImg = this.isLogin
  //     ? 'https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png'
  //     : 'assets/image/icon/user.svg';

  //   this.goToUrl('personal-area');
  // }
  // else {
  //   alert("Були введен логін та пошта не вірно, або вони порожні");
  //   this.login = '';
  //   this.password = ''
  // }
