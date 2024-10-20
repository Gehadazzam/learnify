import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="containerz">
      <nav class="nav">
        <div class="logo" (click)="navigateToLandpage()">

          <img src="/assets/images/logo.png" alt="Learnify" />
        </div>
        <div class="menu" (click)="toggleMenu()">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div class="links" [class.active]="isMenuOpen">
          <a href="/landpage">Home</a>
          <div class="dropdown">
            <a href="#" class="course" (click)="toggleDropdown($event)">Courses</a>
            <div class="dropdown-content" [class.show]="isDropdownOpen">
              <a href="/category/1">Web Development</a>
              <a href="/category/2">Mobile Development</a>
              <a href="/category/3">Data Science</a>
              <a href="/category/4">Game Development</a>
              <a href="category/5">DevOps</a>
              <a href="#">More..</a>
            </div>
          </div>
          <a href="">Skill Share</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/register" class="log" >Login /Signup</a>
        </div>
        <div class="icons" (click)="navigateToRegister()">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="button">
          <button class="btn btn-primary"  (click)="navigateToRegister()">Get Started</button>
        </div>
      </nav>
    </div>
  `,
  styles: [`
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .containerz .nav {
      display: flex;
      width: 90%;
      margin-left: 5%;
      align-items: center;
      justify-content: space-between;
    }

    .containerz .nav .logo {
      padding-left: 2%;
      width: 10%;
    }

    .containerz .nav .logo img {
      width: 100%;
      height: 70px;
    }

    .containerz .nav .links {
      display: flex;
      align-items: center;
      margin-left: 50px;
      width: 50%;
      justify-content: space-between;          <img src="/assets/images/logo.png" alt="Learnify" />
    }

    .containerz .nav .links a {
      text-decoration: none;
      color: rgb(60, 84, 190);
      font-weight: bold;
      position: relative;
      font-size: 20px;
    }

    a::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: #18272f;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    a:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: white;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }

    .dropdown-content.show {
      display: block;
    }

    .dropdown-content a {
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      color: rgb(60, 84, 190);
      transition: background-color 0.3s ease;
    }

    .dropdown-content a:hover {
      background-color: #e1e1e1;
    }

    .containerz .nav .icons {
      margin-right: 2%;
      display: flex;
      width: 8%;
      justify-content: center;
    }

    .containerz .nav .icons i {
      padding: 10px;
      border-radius: 50%;
      background-color: #7aa3fc;
      padding-right: 10px;
      color: white;
    }

    .containerz .nav .icons i:hover {
      background-color: #2f5ab6;
    }

    .containerz .nav .btn {
      background-color: #7aa3fc;
      border: none;
     
    }

    .containerz .nav .btn:hover {
      background-color: #2f5ab6;
    }
     .btn{
        padding: 5px 10px;
    }
    .parallax {
      height: 75vh;
      width: 100%;
      background-image: url(/assets/images/intro.jpg);
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
    }

    .content {
      position: relative;
      top: 40%;
      transform: translateY(-50%);
      text-align: center;
      color: rgb(255, 255, 255);
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

    .menu {
      display: none;
    }

    .log {
      display: none;
    }

    @media (max-width: 768px) {
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

      .links {
        display: none;
        flex-direction: column;
        width: 100% !important;
        opacity: 0;
        position: absolute;
        top: 50px;
        right: 0;
        background-color: white;
        z-index: 9;
        transition: opacity 0.3s ease-in-out;
      }

      .links.active {
        display: flex;
        opacity: 1;
      }

      .links a {
        width: 100% !important;
        padding: 15px;
        text-align: center;
        border-bottom: 1px solid #ddd;
      }

      .links a:hover {
        background-color: #e1e1e1;
      }

      .containerz .nav .logo {
        width: 20%;
      }

      .containerz .nav .icons,
      .containerz .nav .button {
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
  `],
})
export class NavbarComponent {
  isMenuOpen = false;
  isDropdownOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigateToRegister() {
    window.location.href = '/register';
  }
  navigateToContact() {
    window.location.href = '/contact';
  }
  navigateToLandpage() {
    window.location.href = '/landpage';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!(event.target as HTMLElement).closest('.course') &&
      !(event.target as HTMLElement).closest('.dropdown-content')) {
      this.isDropdownOpen = false;
    }
  }
}

