import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telteg';
  aSide !: number;
  bSide !: number;
  doubleArea !: number;

  calcArea(): void {
    let area = this.aSide * this.bSide;
    this.doubleArea = area * 2;
  }
}