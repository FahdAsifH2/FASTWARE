import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// Method to handle button clicks and navigate or perform actions
constructor(private router:Router){}
navigate(destination: string)
{
  debugger
  // Example: Navigate to different routes based on button clicked
  switch(destination)
   {
    
    case 'pf':
      // Navigate to a specific route (replace 'pfoopdsa' with your actual route path)
      this.router.navigateByUrl('/pf');
      break;
    case 'digital-logic':
      // Navigate to another route
      this.router.navigate(['/digital-logic']);
      break;
    case 'coal':
      // Perform some action for COAL
      this.router.navigateByUrl('/COAL');
      break;
    case 'database':
      // Perform action or navigate
      this.router.navigateByUrl('/database');
      break;
    case 'operatingsystems':
      // Navigate or perform some action
      this.router.navigateByUrl('/operatingsystems');
      break;
    default:
      // Handle unexpected cases
      break;
  }
}
  navigateByUrl(arg0: string) {
    throw new Error('Method not implemented.');
  }
}



