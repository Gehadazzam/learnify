import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-sharing',
  standalone: true,
  template: `
    <div class="skill-sharing">
      <div class="content continer">
        <div class="image-container">
          <img src="assets/images/skill.jpg" alt="Skill Sharing Illustration" />
        </div>
        <div class="text-content">
          <h1>Skill Sharing</h1>
          <p>
            Share your skills with the world and learn from industry experts.
            This platform provides you with the opportunity to exchange
            knowledge with others. Whether you know Python or JavaScript, you
            can connect with people who have complementary skills and share your
            expertise. It's a chance to grow together by trading valuable
            insights and expanding your skill set!
          </p>
          <button>
            Do the test now
            <img
              src="assets/images/chevron_right_24dp_5C78B4_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Right arrow"
            />
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .skill-sharing {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4rem;
        background-color: #f0f4fa;
      }

      .content {
        display: flex;
        background-color: #5c78b4;
        color: white;
        border-radius: 10px;
        overflow: hidden;
        max-width: 1200px;
        width: 100%;
        height: 400px;
      }

      .image-container {
        flex: 1;
        min-width: 40%;
        // clip-path: path("M 0 0 L 100% 0 C 100% 50%, 0% 50%, 0 100% Z"); /* New clip path */
      }

      .image-container img {
        width: 90%;
        height: 100%;
        object-fit: cover;
      }

      .text-content {
        flex: 1;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow-y: auto;
      }

      h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      p {
        margin-bottom: 1rem;
        line-height: 1.4;
        font-size: 0.9rem;
      }

      button {
        background-color: white;
        color: #5c78b4;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 0.9rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        align-self: flex-start;
        transition: transform 0.3s ease;
      }

      button:hover {
        transform: scale(1.05);
      }

      button img {
        width: 16px;
        height: 16px;
      }

      @media (max-width: 768px) {
        .content {
          flex-direction: column;
          height: auto;
        }

        .image-container {
          clip-path: none;
          min-height: 150px;
        }
         .image-container img{
          width: 100%;
         }
        .text-content {
          padding: 1rem;
        }

        h1 {
          font-size: 1.75rem;
        }
      }

      @media (max-width: 480px) {
        .skill-sharing {
          padding: 1rem;
        }

        h1 {
          font-size: 1.5rem;
        }

        button {
          width: 100%;
          justify-content: center;
        }
      }
    `,
  ],
})
export class SkillSharingComponent { }
