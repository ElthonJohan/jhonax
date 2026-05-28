import { Routes} from '@angular/router';
import { NavbarComponent } from './componente/navbar-component/navbar-component';
import { HomeComponent } from './componente/home-component/home-component';

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];
