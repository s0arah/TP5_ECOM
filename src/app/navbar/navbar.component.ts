import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  actions: Array<any> = [
    {title: 'Home', route: '/home', icon: 'house'},
    {title: 'Products', route: '/admin/products', icon: 'search'},
    {title: 'Add Product', route: '/admin/newProduct', icon: 'plus-circle'},
  ]

  currentAction: any;

  constructor(
    public appState: AppStateService,
    private router: Router){}

  setCurrentAction(action: any) {
    this.currentAction = action;
  }

  login(){
    this.router.navigate(['/login'])
  }
  logout() {
    this.appState.setAuthState({})
    this.router.navigate(['/login'])
  }
}
