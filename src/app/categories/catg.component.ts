import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-category',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="card" (click)="navigateToCategory()">
      <img [src]="category.imageUrl" class="card-img-top" [alt]="category.name">
      <div class="card-body">
        <h5 class="card-title">{{ category.name }}</h5>
      </div>
    </div>
  `,
    styles: [`
    .card {
      overflow: hidden;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 100%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.5s;
    }
    .card:hover {
      transform: scale(1.05);
    }
    .card-img-top {
      height: 100px;
      object-fit: cover;
    }
    .card-title {
      font-size: 0.7rem;
      color: #465587;
    }
  `]
})
export class CategoryComponent {
    @Input() category: any;

    constructor(private router: Router) { }

    navigateToCategory() {
        this.router.navigate(['/category', this.category.id]);
    }
}