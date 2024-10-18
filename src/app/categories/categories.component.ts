import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CategoryComponent } from './catg.component'

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, CategoryComponent],
  template: `
    <div class="container">
      <h1 class="text-center my-4">Categories</h1>
      <div class="grid">
        <app-category *ngFor="let category of categories" [category]="category"></app-category>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin: 0 auto;
      padding: 20px;
    }
    .text-center {
      text-align: center;
      color: #465587;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 20px;
    }
    @media (max-width: 424px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
    }
  `]
})

export class CategoriesComponent {
  categories = [
    { id: 1, name: 'Web Development', imageUrl: 'assets/images/webdev.svg' },
    { id: 2, name: 'Mobile Development', imageUrl: 'assets/images/mobiledev.jpg' },
    { id: 3, name: 'Data Science', imageUrl: 'assets/images/datasience.jpeg' },
    { id: 4, name: 'Game Development', imageUrl: 'assets/images/gamedev.jpg' },
    { id: 5, name: 'DevOps', imageUrl: 'assets/images/devops.jpg' },
    { id: 6, name: 'Machine Learning', imageUrl: 'assets/images/ML.jpg' },
    { id: 7, name: 'Cyber Security', imageUrl: 'assets/images/cypersec.jpg' },
    { id: 8, name: 'Cloud Computing', imageUrl: 'assets/images/cloudcom.jpg' },
    { id: 9, name: 'Software Testing', imageUrl: 'assets/images/gamedev.jpg' },
    { id: 10, name: 'Programming Languages', imageUrl: 'assets/images/pl.jpeg' }
  ];

  constructor(private router: Router) { }

  navigateToCategory(categoryId: number) {
    this.router.navigate(['/category', categoryId]);
  }
}