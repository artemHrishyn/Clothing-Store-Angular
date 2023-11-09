import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent {

  constructor(
    private routing: Router
  ) { }

  public goToUrl(value: string) {
    this.routing.navigate([value]);
  }
}
