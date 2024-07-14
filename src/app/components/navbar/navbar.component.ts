import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent,AboutComponent],
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
    
    
      this.router.navigate(['/home'])
    
  }
  navigateToAbout()
  {
    
    this.router.navigate(['/about'])
  }
  
navigateToMain() {
  this.router.navigate(['/'])
  }
}
