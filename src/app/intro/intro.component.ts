import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="">
      <div class="hero">
        <div class="parallax">
          <div class="content">
            <h1 class="fade-in-down">Unlock Your Coding Potential</h1>
            <p class="fade-in-up">Learn to code, master skills, and start your freelancing journey.</p>
            <button class="btn btn-primary btn-lg bounce-in">Start Learning Now</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .parallax {
      height: 100vh;
      width: 100%;
      background-image: url('/assets/images/intro.jpg');
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .content {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      color: #ffffff;
    }

    .content h1 {
      font-size: 4rem;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .content p {
      font-size: 1.5rem;
      font-weight: bolder;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      padding-top: 20px;
    }

    .btn {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 1.2rem;
      background-color: #007bff;
      color: #ffffff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn:hover {
      background-color: #0056b3;
    }

    /* Animations */
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes bounceIn {
      0%, 20%, 40%, 60%, 80%, to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      0% {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
      }
      20% {
        transform: scale3d(1.1, 1.1, 1.1);
      }
      40% {
        transform: scale3d(0.9, 0.9, 0.9);
      }
      60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
      }
      80% {
        transform: scale3d(0.97, 0.97, 0.97);
      }
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }

    .fade-in-down {
      animation: fadeInDown 1s ease-out;
    }

    .fade-in-up {
      animation: fadeInUp 1s ease-out;
    }

    .bounce-in {
      animation: bounceIn 0.7s;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .content h1 {
        font-size: 2.5rem;
      }

      .content p {
        font-size: 1.2rem;
      }

      .btn {
        font-size: 1rem;
      }
    }
  `]
})
export class IntroComponent { }