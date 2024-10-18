import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, NgClass],
  template: `
   <div class="background">
        <div id="login-form" class="form-container" [ngClass]="{'hidden': !isLoginFormVisible}">
          <h2>Login</h2>
          <form (submit)="onSubmitLogin($event)">
            <div class="mb-3">
              <label for="loginEmail" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="loginEmail"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="loginPassword" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="loginPassword"
                required
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="loginCheck"
                required
              />
              <label class="form-check-label" for="loginCheck"
                >Remember me</label
              >
            </div>
            <button type="submit" class="btn btn-outline-red w-100">
              Login
            </button>
          </form>

          <div class="toggle-section">
            <p>Don't have an account?</p>
            <button
              class="btn btn-outline-red"
              (click)="toggleForm()"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div id="signup-form" class="form-container" [ngClass]="{'hidden': isLoginFormVisible}">
          <h2>Sign Up</h2>
          <form (submit)="onSubmitSignup($event)">
            <div class="mb-3">
              <label for="signupUsername" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="signupUsername"
                required
              />
            </div>
            <div class="mb-3">
              <label for="signupEmail" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="signupEmail"
                required
              />
            </div>
            <div class="mb-3">
              <label for="signupPassword" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="signupPassword"
                required
              />
            </div>
            <div class="mb-3">
              <label for="signupConfirmPassword" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                class="form-control"
                id="signupConfirmPassword"
                required
              />
            </div>
            <button type="submit" class="btn btn-outline-red w-100">
              Sign Up
            </button>
          </form>

          <div class="toggle-section">
            <p>Already have an account?</p>
            <button
              class="btn btn-outline-red"
              (click)="toggleForm()"
            >
              Login
            </button>
          </div>
        </div>
      </div>
  `,
  styles: `
  .form-container {
    background-color: transparent;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    color: rgb(255, 255, 255);
    font-weight: bold;
    max-width: 400px;
    margin: auto;
    width: 100%;
    position: relative;
}


.form-container h2 {
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
}

.toggle-section {
    margin-top: 20px;
    text-align: center;
}

.btn {
    background-color: #7aa3fc;
    border: none;
    color: white;
}

.btn:hover {
    background-color: #2f5ab6;
    color: white;
}

.hidden {
    display: none;
}

.menu {
    display: none;
}

.log {
    display: none;
}

.background {
    background-image: url('/assets/images/register.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

@media (max-width: 768px) {

    /* Hamburger menu styling */
    .menu {
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 25px;
        color: #7aa3fc;
        cursor: pointer;
        z-index: 10;
        margin-right: 5%;
        margin-top: 3px;
    }

    /* Initially hide the full menu links */
    .links {
        display: none;
        flex-direction: column;
        width: 100% !important;
        position: absolute;
        top: 50px;
        right: 100%;
        background-color: white;
        z-index: 2000;
        transition: right 0.3s ease-in-out;
    }

    /* Links take full width */
    .links a {
        width: 100%;
        padding: 15px;
        text-align: center;
        border-bottom: 1px solid #ddd !important;
    }

    /* Adjust hover effect on links */
    .links a:hover {
        background-color: #e1e1e1;
    }

    /* Adjust logo size for mobile */
    .nav .logo {
        width: 20%;
    }

    /* Hide icons and buttons on mobile */
    .nav .icons,
    .nav .btn {
        display: none;
    }

    .dropdown {
        width: 100%;
    }

    .dropdown a {
        display: block;
    }

    .dropdown .dropdown-content {
        width: 100%;
    }

    .log {
        display: block;
        width: 100%;
    }

    .log a {
        display: block;
        width: 100%;
    }
}


/* animation part */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.form-container {
    animation: fadeIn 0.8s ease;
}


@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

input {
    opacity: 0;
    animation: slideIn 0.6s ease forwards;
}

input:nth-child(1) {
    animation-delay: 0.2s;
}

input:nth-child(2) {
    animation-delay: 0.4s;
}

input:nth-child(3) {
    animation-delay: 0.6s;
}

input:nth-child(4) {
    animation-delay: 0.8s;
}
@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}

.btn:hover {
    animation: pulse 0.5s infinite;
    background-color: #3C54BE;
    transition: background-color 0.3s ease;
}
  `
})
export class RegisterComponent {
  isLoginFormVisible = true;

  toggleForm() {
    this.isLoginFormVisible = !this.isLoginFormVisible;
  }

  onSubmitLogin(event: Event) {
    event.preventDefault();
    window.location.href = '/landpage';
  }
  onSubmitSignup(event: Event) {
    event.preventDefault();
    this.isLoginFormVisible = true;
  }
}
