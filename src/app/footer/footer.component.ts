import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <main class="main-content">
    <!-- Content here -->
  </main>

  <!-- Footer Section -->
  <footer class="footer bg-footer text-white">
    <div class="container">
      <div class="row justify-content-between">
        <!-- Navigation Column -->
        <div class="col-md-4 footer-nav mb-4 mb-md-0">
          <h5 class="text-white">Navigate</h5>
          <div class="row">
            <div class="col">
              <ul class="list-unstyled">
                <li class="my-3"><a href="#" class="text-white text-decoration-none">Home</a></li>
                <li class="my-3"><a href="#" class="text-white text-decoration-none">About Us</a></li>
                <li class="my-3"><a href="#" class="text-white text-decoration-none">Courses</a></li>
              </ul>
            </div>
            <div class="col">
              <ul class="list-unstyled">
                <li class="my-3"><a href="#" class="text-white text-decoration-none">FAQ</a></li>
                <li class="my-3"><a href="#" class="text-white text-decoration-none">Register</a></li>
                <li class="my-3"><a href="#" class="text-white text-decoration-none">Sign In</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Additional Resources Column -->
        <div class="col-md-4 mb-4 mb-md-0">
          <h5 class="text-white">Additional Resources</h5>
          <ul class="list-unstyled">
            <li class="my-3"><a href="#" class="text-white text-decoration-none"><i class='bx bx-chevron-right'></i> Designing an Online Course</a></li>
            <li class="my-3"><a href="#" class="text-white text-decoration-none"><i class='bx bx-chevron-right'></i> Why Online Courses Are Important</a></li>
            <li class="my-3"><a href="#" class="text-white text-decoration-none"><i class='bx bx-chevron-right'></i> Promoting Online Business via Social Media</a></li>
            <li class="my-3"><a href="#" class="text-white text-decoration-none"><i class='bx bx-chevron-right'></i> Effective Digital Communication Strategies</a></li>
            <li class="my-3"><a href="#" class="text-white text-decoration-none"><i class='bx bx-chevron-right'></i> Gamification in Learning</a></li>
          </ul>
        </div>

        <!-- Contact Information Column -->
        <div class="col-md-4 text-md-end">
          <h5>Learnfiy E-Learning System</h5>
          <p><i class='bx bx-phone'></i> Toll Free Customer Care: (+20)1111111111</p>
          <p><i class='bx bx-envelope'></i> Support&#64;leranfiy.com</p>
          <div class="mt-3">
            <a href="#" class="text-white"><i class='bx bxl-facebook-circle fs-4'></i></a>
            <a href="#" class="text-white ms-2"><i class='bx bxl-youtube fs-4'></i></a>
            <a href="#" class="text-white ms-2"><i class='bx bxl-instagram-alt fs-4'></i></a>
          </div>
        </div>
      </div>
      <hr class="text-white my-4">
      <div class="text-center">
        <p class="mb-0">Help | Terms & Conditions | Privacy Policy | Terms of Use</p>
        <p class="mb-0">Copyright © 2024 Learnfiy. All Rights Reserved</p>
      </div>
    </div>
  </footer>
  `,
  styles: [`
  .footer {
    background-color: #414e6e;
    width: 100%;
    padding: 3rem 0;
  }

  .footer-nav h5 {
    font-size: 1.25rem;
  }

  .footer-nav ul {
    padding-left: 0;
  }

  .footer-nav ul li {
    list-style: none;
  }

  .footer-nav ul li a {
    color: #ffffff;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  .footer-nav ul li a:hover {
    color: #b0c7e0;
  }

  .contact-info h5 {
    font-size: 1.25rem;
  }

  .contact-info p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .contact-info .mt-3 i {
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }

  .contact-info .mt-3 i:hover {
    color: #b0c7e0;
  }

  hr {
    border-color: #ffffff;
  }

  .text-center p {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }

  @media (max-width: 768px) {
    .footer {
      padding: 2rem 0;
    }

    .footer-nav h5,
    .contact-info h5 {
      font-size: 1rem;
    }

    .footer-nav ul li a,
    .contact-info p {
      font-size: 0.875rem;
    }

    .contact-info .mt-3 i {
      font-size: 1.25rem;
    }

    .text-center p {
      font-size: 0.75rem;
    }
  }
  `]
})
export class FooterComponent { }
