import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LCARS';
  routes = [
    {route: '/crew', name: 'Crew'},
    {route: '/equipment', name: 'Equipment'}
  ];
}
