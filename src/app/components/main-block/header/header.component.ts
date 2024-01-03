import { Component, OnInit } from '@angular/core';
import { GoToUrlService } from 'src/app/service/goToUrl/go-to-url.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    './media.scss',
  ]
})
export class HeaderComponent implements OnInit {

  constructor(
    private goToUrlService: GoToUrlService
  ) {}
  ngOnInit(): void {
  }

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
    else
    {
      this.goToUrlService.goToUrl('personal-area');
    }
  }

  public goToUrl(value: string) {
    this.isLogin = false;
    this.goToUrlService.goToUrl(value);
  }

  public returnLogin() {
    this.isLogin = false;
  }
  public returnImage(image: string) {
    this.userImg = image;
  }
}
