import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-course',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="card h-100">
      <img [src]="course.imageUrl" class="card-img-top" [alt]="course.title">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ course.title }}</h5>
        <p class="card-text flex-grow-1">{{ course.description }}</p>
      </div>
      <div class="text-center mt-3">
        <a href="#" class="btn btn-primary">Enroll Now</a>
      </div>
    </div>
  `,
    styles: [`
    .card {
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
    .card-img-top {
      height: 200px;
      object-fit: cover;
    }
    .card-body {
      padding: 20px;
      display: flex;
      flex-direction: column;
    }
    .btn-primary {
      background-color: #414e6e;
      border-color: #414e6e;
      margin-bottom:0.8rem;
    }
    .btn-primary:hover{
        background-color:#839dd1;
        border-color:#839dd1;
    }
  `]
})
export class CourseComponent {
    @Input() course: any;
}