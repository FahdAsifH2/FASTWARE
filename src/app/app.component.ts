import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DatabaseComponent } from './components/database/database.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    HomeComponent,
    DatabaseComponent,
    NavbarComponent,
    FooterComponent,
    MatToolbarModule,
    MatIconModule // Import MatIconModule here
  ]
})
export class AppComponent {
  title = 'FASTWARE';
}
