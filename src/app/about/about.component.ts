import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: ` <div class="container">
        <div class="hero-section">
            <div class="image-container">
                <div class="image-shape shape1"><img src="assets/images/study.jpg" alt="Students learning"></div>
                <div class="image-shape shape2"><img src="assets/images/teacheer.jpg" alt="Teacher explaining"></div>
                <div class="image-shape shape3"><img src="assets/images/learning.jpg" alt="Online learning"></div>
            </div>
            <div class="content">
                <h5>Our Story</h5>
                <h2>Transform lives through <span class="highlight">learning anywhere.</span></h2>
                <p>Welcome to learnify , your go-to destination for high-quality learning and development courses.
                    Our mission is to empower individuals and organizations with the skills they need to succeed in an ever-evolving world.
                    We offer a wide range of courses designed to meet your needs . With expert instructors , flexible learning options,
                     and a focus on practical.
                     We are committed to helping you unlock your full potential. 
                     Join our community of lifelong learners and start your journey towards success today!

                </p>
                

            </div>
        </div>
        <div class="info-cards">
            <div class="card">
                <h3>Our Vision</h3>
                <p>Empowering Futures Growth through Lifelong Learning</p>
            </div>
            <div class="card">
                <h3>Our Mission</h3>
                <p>courses that empower individuals to grow personally and professionally.</p>
            </div>
            <div class="card highlight-card">
                <h3>Our Values</h3>
                <p>we strive to keep our courses dynamic and relevant in a rapidly changing world.</p>
            </div>
        </div>
    </div>`,
  styles: `
    body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    color: #333333;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.hero-section {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
}

.image-container {
    flex: 0 0 40%;
    position: relative;
    height: 400px;
}

.image-shape {
    position: absolute;
    overflow: hidden;
}

.image-shape img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.shape1 {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    top: 0;
    left: 0;
    z-index: 3;
}

.shape2 {
    width: 250px;
    height: 250px;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    top: 0;
    right: 0;
    z-index: 1;
}

.shape3 {
    width: 240px;
    height: 240px;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

.content {
    flex: 1 1 60%;
    padding-left: 25px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


}

h5 {
    text-transform: uppercase;
    font-size: 14px;
    color: #888888;
    margin-bottom: 10px;
}

h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.2;
}

.highlight {
    color: rgb(60, 84, 190);
    position: relative;
    display: inline-block;
}

.highlight::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background-color: #ffc107;
}

p {
    font-size: 16px;
    line-height: 1.6;
    color: #666666;
}

.info-cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.card {
    flex: 1;
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
}

.highlight-card {
    background-color: rgb(60, 84, 190);
    color: #ffffff;
}

.card h3 {
    font-size: 24px;
    margin-bottom: 15px;
    color: rgb(60, 84, 190);
}

.highlight-card h3 {
    color: #ffffff;
}

.card p {
    font-size: 14px;
    color: #666666;
}

.highlight-card p {
    color: #ffffff;
}

@media (max-width: 768px) {
    .hero-section {
        flex-direction: column;
    }

    .image-container {
        flex: 0 0 100%;
        margin-bottom: 30px;
    }

    .content {
        flex: 0 0 100%;
        padding-left: 0;
    }

    .info-cards {
        flex-direction: column;
    }
}
    `
})
export class AboutComponent {

}
