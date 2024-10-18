import { Component } from '@angular/core';
import { CategoriesComponent } from "../categories/categories.component";
import { CoursesComponent } from "../courses/courses.component";
import { SkillSharingComponent } from "../skill-sharing/skill-sharing.component";
import { IntroComponent } from "../intro/intro.component";
import { FooterComponent } from "../footer/footer.component";
import { CourseDetailsComponent } from "../course-details/course-details.component";

import { RegisterComponent } from "../register/register.component";
@Component({
  selector: 'app-landpage',
  standalone: true,
  imports: [CategoriesComponent, CoursesComponent, SkillSharingComponent, IntroComponent, FooterComponent, CourseDetailsComponent, RegisterComponent],
  template: `
<app-intro></app-intro>
<app-categories></app-categories>
<app-skill-sharing></app-skill-sharing>
<app-course-details></app-course-details>
<app-courses></app-courses>
  `
})
export class LandpageComponent {

}
