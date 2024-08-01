import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent,AboutComponent,MatToolbarModule,MatIconModule,MatButtonModule],
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
