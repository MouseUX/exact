import {Component} from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  name: string;
  constructor() {
    this.name="dani"
  }
  //
  // go() {
  //   this.router.navigate([`../itemsList`], { relativeTo: this.route });
  // }

  sayMyName() {
    this.name="fsaf"
    console.log('My name is')
  }
}
