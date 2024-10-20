import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  template: `
  <div class="container contact-form">
      <div class="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <form method="post">
        <h3>Drop Us a Message</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                name="txtName"
                class="form-control"
                placeholder="Your Name *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="txtEmail"
                class="form-control"
                placeholder="Your Email *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtPhone"
                class="form-control"
                placeholder="Your Phone Number *"
                value=""
              />
            </div>
            <!-- Submit button for larger screens (PC view) -->
            <div class="form-group">
              <input
                type="submit"
                name="btnSubmit"
                class="btnContactSubmit"
                value="Send Message"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <textarea
                name="txtMsg"
                class="form-control"
                placeholder="Your Message *"
                style="width: 100%; height: 150px"
              ></textarea>
            </div>
            <!-- Submit button for mobile view (hidden on larger screens) -->
            <div class="form-group mobile-submit">
              <input
                type="submit"
                name="btnSubmitMobile"
                class="btnContactSubmitMobile"
                value="Send Message"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  `,
  styles: `body {
    background: -webkit-linear-gradient(left, #0072ff, #00c6ff);
}

.contact-form {
    background: #fff;
    margin-top: 10%;
    margin-bottom: 5%;
    width: 70%;
    padding: 5%;
    border-radius: 1rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    position: relative;
    animation: fadeIn 1s ease-in-out; /* Form fade-in animation */
}
.contact-form .form-group{
  margin-bottom:1.5rem;
}
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

.contact-form .form-control {
    border-radius: 1rem;
}

.contact-image {
    text-align: center;
    margin-bottom: -50px;
    animation: bounce 2s infinite; /* Rocket bounce effect */
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.contact-image img {
    border-radius: 6rem;
    width: 11%;
    transform: rotate(29deg);
}

.contact-form h3 {
    margin-bottom: 5%;
    margin-top: 60px;
    text-align: center;
    color: #0062cc;
    position: relative;
    z-index: 1;
    animation: slideIn 1s ease-in-out; /* Heading slide-in animation */
}

@keyframes slideIn {
    from {
        transform: translateX(-100px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.contact-form .btnContactSubmit,
.contact-form .btnContactSubmitMobile {
    border-radius: 1rem;
    padding: 1.5%;
    color: #fff;
    background-color:#4e83f5;
    border: none;
    cursor: pointer;
    font-weight: 600;
    width: 50%;
    transition: background-color 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
}
.btnContactSubmitMobile{
  padding: 2.5%;
}

/* Animation for hover and click on buttons */
.contact-form .btnContactSubmit:hover,
.contact-form .btnContactSubmitMobile:hover {
    background-color: #2f5ab6;
    transform: scale(1.1);
}

.contact-form .btnContactSubmit:active,
.contact-form .btnContactSubmitMobile:active {
    transform: scale(0.95);
}

/* Mobile Submit Button (hidden on larger screens) */
.btnContactSubmitMobile {
    display: none;
    width: 100%;
    margin-top: 15px;
    opacity: 0; /* Hidden initially */
    animation: fadeInMobile 0.5s ease forwards; /* Fade-in animation */
}

@keyframes fadeInMobile {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Show the mobile submit button only on mobile screens */
@media (max-width: 767px) {
    .contact-form .btnContactSubmit {
        display: none;
    }

    /* Display the mobile submit button with animation */
    .btnContactSubmitMobile {
        display: block;
        animation: fadeInMobile 0.5s ease forwards;
    }
}`
})
export class ContactUsComponent {

}
