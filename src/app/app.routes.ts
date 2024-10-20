import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LandpageComponent } from './landpage/landpage.component';
import { CategoryDetailsComponent } from './categorie-details/categorie-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
export const routes: Routes = [
    { path: 'landpage', component: LandpageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'category/:id', component: CategoryDetailsComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/landpage', pathMatch: 'full' }
];