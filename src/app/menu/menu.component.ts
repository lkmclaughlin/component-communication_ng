import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus=[
    {display: "HOME", link: "app/home/home.component.html"},
    {display: "ABOUT", link: "app/about/about.component.html"},
    {display: "SUPPORT", link: "app/support/support.component.html"}
  ]
}
