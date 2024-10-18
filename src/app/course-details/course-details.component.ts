import { Component, Input } from '@angular/core';

interface CourseDetails {
  title: string;
  description: string;
  instructor: string;
  category: string;
  duration: string;
  level: string;
  lessons: number;
  quizzes: number;
  students: number;
  imageUrl: string;
}

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  template: ` 
  <div class="container mt-4 mr-5">
    <div>
        <div class="card w-full mb-3 p-3">
            <!-- Card content -->
            <div class="row">
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">{{ course.title }}</h3>
                    <p class="card-text">{{ course.description }}</p>
                    <div class="container d-flex text-wrap gap-4">
                        <img [src]="course.imageUrl" class="img-fluid rounded-start" style="height: 75px; width: 90px;" alt="Instructor Image"> 
                        <p class="card-text col-sm-4">
                            <span class="text-primary font-weight-bold">Instructor:</span> {{ course.instructor }}<br>
                            <span class="text-primary font-weight-bold">Category:</span> {{ course.category }}<br>
                            <span class="text-primary font-weight-bold">Duration:</span> {{ course.duration }}<br>
                            <span class="text-primary font-weight-bold">Level:</span> {{ course.level }}<br>
                            <span class="text-primary font-weight-bold">Lessons:</span> {{ course.lessons }}<br>
                            <span class="text-primary font-weight-bold">Quizzes:</span> {{ course.quizzes }}<br>
                            <span class="text-primary font-weight-bold">Students:</span> {{ course.students }}
                          </p>
                        </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
  </div>
  `,
  styles: `
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .card-img-top {
    height: 150px;
    object-fit: cover;
  }

  .card-body {
    padding: 20px;
  }
  `
})
export class CourseDetailsComponent {
  @Input() course!: CourseDetails;
}
