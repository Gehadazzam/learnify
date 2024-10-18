import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LandpageComponent } from './landpage/landpage.component';
import { CategoryDetailsComponent } from './categorie-details/categorie-details.component';
export const routes: Routes = [
    { path: 'landpage', component: LandpageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'category/:id', component: CategoryDetailsComponent },
    { path: '', redirectTo: '/landpage', pathMatch: 'full' }
];