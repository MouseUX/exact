import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  rotuer: any;
  name: string;
  constructor(private router: Router) {
    this.router = router;
    this.name = 'dani';
  }

  moveRoute() {
    this.router.navigate([`/itemsList`]);
  }
}
