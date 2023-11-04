import { Component } from '@angular/core';
import { ProcessingDataService } from './service/processing-data/processing-data.service';
import { Router } from '@angular/router';
enum SiteCategory {
  clothes = "clothes",
  reviews = "reviews"
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private routing: Router,
    private processingDataService: ProcessingDataService
  ) {}

  public isShowMenu: boolean = false;
  public isLogin: boolean = false;

  public showMiniMenu():void {
    this.isShowMenu = !this.isShowMenu;
  }

  public loginShow(): void {
    this.isLogin = !this.isLogin;
  }

  public goToUrl(value: string) {
    this.isLogin = false;
    this.routing.navigate([value]);
  }

  list = {
    info: [
      "Україна м. Одеса",
      "Про нас",
      "Повернення та відшкодування"
    ],
    help: [
      "Мій аккаунт",
      "Безкоштовна доставка до додому",
      "Статус замовлення"
    ]
  }
}