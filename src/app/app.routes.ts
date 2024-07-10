import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PfComponent } from './components/pf/pf.component';
import { COALComponent } from './components/coal/coal.component';
import { DatabaseComponent } from './components/database/database.component';
import { OperatingSystemsComponent } from './components/operating-systems/operating-systems.component';
import { DigitalLogicComponent } from './components/digital-logic/digital-logic.component';

export const routes: Routes = [
   { path: ' ', component: HomeComponent } ,
   { path: 'pf', component: PfComponent },
   { path: 'COAL', component: COALComponent },
   { path: 'database', component: DatabaseComponent },
   { path: 'digitallogic', component: DigitalLogicComponent },
  
   { path: 'operatingsystems', component: OperatingSystemsComponent }
];
