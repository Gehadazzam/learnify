import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { CoursesComponent } from './courses/courses.component';
import { LandpageComponent } from './landpage/landpage.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CategoriesComponent, CoursesComponent, LandpageComponent, RegisterComponent, FooterComponent],
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  styleUrls: ['../styles.css']
})
export class AppComponent {
  title = 'learnify';
}
