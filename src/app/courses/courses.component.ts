import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [],
    template: `
   <div class="container py-5">
        <div class="featured-header">
            <p class="unique-courses">* 10,000+ Unique Online Courses Lists</p>
            <h1 class="featured-title">Featured Online Courses</h1>
        </div>

        <div class="row g-4">
            <!-- Course 1 -->
            <div class="col-md-6">
                <div class="course-card">
                    <div class="d-flex align-items-center">
                        <img src="assets/images/code5.jpg" alt="Digital Photography Course" class="course-image">
                        <div class="ms-4">
                            <span class="course-price">$30 / 20 hours</span>
                            <h3 class="course-title">Learn Programming - An Introduction For Non-Programmers</h3>
                            <div class="course-meta">
                                <span class="me-4">
                                    <i class="bi bi-book meta-icon"></i>
                                    100 Lessons
                                </span>
                                <span>
                                    <i class="bi bi-people meta-icon"></i>
                                    300 Students
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Course 2 -->
            <div class="col-md-6">
                <div class="course-card">
                    <div class="d-flex align-items-center">
                        <img src="assets/images/code9.jpg" alt="Quantum Physics Course" class="course-image">
                        <div class="ms-4">
                            <span class="course-price">$55 / 40 hours</span>
                            <h3 class="course-title">Python Programming - From Basics to Advanced level</h3>
                            <div class="course-meta">
                                <span class="me-4">
                                    <i class="bi bi-book meta-icon"></i>
                                    200 Lessons
                                </span>
                                <span>
                                    <i class="bi bi-people meta-icon"></i>
                                    500 Students
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="course-section">
                <div class="container">
                    <div class="row g-4">
                        <!-- Course 3 -->
                        <div class="col-md-6">
                            <div class="course-card">
                                <div class="d-flex">
                                    <img src="assets/images/code6.jpg" alt="Quantum Mechanics Course" class="course-image">
                                    <div class="course-content">
                                        <div class="course-price">$40 / 25 hours</div>
                                        <h3 class="course-title"> Web Development with HTML, CSS, and JavaScript </h3>
                                        <div class="course-meta">
                                            <div class="meta-item">
                                                <i class="bi bi-book meta-icon"></i>
                                                120 Lessons
                                            </div>
                                            <div class="meta-item">
                                                <i class="bi bi-people meta-icon"></i>
                                                600 Students
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <!-- Course 4 -->
                        <div class="col-md-6">
                            <div class="course-card">
                                <div class="d-flex">
                                    <img src="assets/images/code11.jpg" alt="Game Theory Course" class="course-image">
                                    <div class="course-content">
                                        <div class="course-price">$50 / 35 hours</div>
                                        <h3 class="course-title">React Native for Web : Build Cross-Platform Web Apps</h3>
                                        <div class="course-meta">
                                            <div class="meta-item">
                                                <i class="bi bi-book meta-icon"></i>
                                                160 Lessons
                                            </div>
                                            <div class="meta-item">
                                                <i class="bi bi-people meta-icon"></i>
                                                850 Students
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <!-- Course 5 -->
                        <div class="col-md-6">
                            <div class="course-card">
                                <div class="d-flex">
                                    <img src="assets/images/code13.jpg"alt="Urban Planning Course" class="course-image">
                                    <div class="course-content">
                                        <div class="course-price">$60 / 45 hours</div>
                                        <h3 class="course-title">Mastering TypeScript for Modern JavaScript Development</h3>
                                        <div class="course-meta">
                                            <div class="meta-item">
                                                <i class="bi bi-book meta-icon"></i>
                                                190 Lessons
                                            </div>
                                            <div class="meta-item">
                                                <i class="bi bi-people meta-icon"></i>
                                                750 Students
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <!-- Course 6 -->
                        <div class="col-md-6">
                            <div class="course-card">
                                <div class="d-flex">
                                    <img src="assets/images/code10.jpg"alt="Cybernetics Course" class="course-image">
                                    <div class="course-content">
                                        <div class="course-price">$35 / 30 hours</div>
                                        <h3 class="course-title">Cybernetic Systems, Robotics, and Artificial Intelligence Integration</h3>
                                        <div class="course-meta">
                                            <div class="meta-item">
                                                <i class="bi bi-book meta-icon"></i>
                                                140 Lessons
                                            </div>
                                            <div class="meta-item">
                                                <i class="bi bi-people meta-icon"></i>
                                                500 Students
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
    <div class="button-container">
        <a href="#" class="view-all-button">
            View All Courses
        </a>
    </div>
        
        </div>
    </div>
  `,
    styles: `
  /* Main Container Styles */
.featured-courses-section {
    padding: 80px 0;
    background-color: #fbfbff;
}

/* Header Styles */
.unique-courses {
    color:#7b8ce0;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.featured-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 3rem;
}

.featured-header {
    text-align: center;
    margin-bottom: 50px;
}

/* Course Card Styles */
.course-card {
    background-color: #f2f7fb;
    border: none;
    border-radius: 12px;
    padding: 20px;
    transition: all 0.3s ease;
    margin-bottom: 30px;
}

.course-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

/* Course Image Styles */
.course-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Course Content Styles */
.course-content {
    margin-left: 25px;
    flex: 1;
}

.course-price {
    color: #7b8ce0;
    font-weight: 500;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 8px;
}

.course-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin: 1rem 0;
    line-height: 1.4;
}

/* Course Meta Information */
.course-meta {
    color: #666;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 20px;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 5px;
}

.meta-icon {
    opacity: 0.7;
    font-size: 1rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    .course-card {
        padding: 15px;
    }

    .course-image {
        width: 80px;
        height: 80px;
    }

    .course-title {
        font-size: 1.1rem;
    }

    .course-content {
        margin-left: 15px;
    }

    .course-meta {
        flex-direction: column;
        gap: 10px;
    }
}

@media (max-width: 576px) {
    .featured-title {
        font-size: 2rem;
    }

    .unique-courses {
        font-size: 1rem;
    }
}

/* Animation Effects */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.course-card {
    animation: fadeIn 0.5s ease-out forwards;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    background-color: #ffffff;
}

.view-all-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #9cb6dd;
    color: white;
    padding: 15px 30px;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    gap: 8px;
}

.view-all-button:hover {
    background-color: #839dd1;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.view-all-button::after {
    content: "➜";
    font-size: 20px;
    transition: transform 0.3s ease;
}

.view-all-button:hover::after {
    transform: translateX(4px);
}

@media (max-width: 768px) {
    .view-all-button {
        padding: 12px 25px;
        font-size: 16px;
    }
}
  `
})
export class CoursesComponent {

}
