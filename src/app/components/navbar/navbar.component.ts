import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent
 {
 constructor(private router:Router)
 {

 }
 navigateToHome()
  {
    
    
      this.router.navigate([' '])
    
  }
  navigateToAbout()
  {

  }
}
