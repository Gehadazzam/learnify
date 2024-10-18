import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseComponent } from './course.component'

@Component({
    selector: 'app-category-details',
    standalone: true,
    imports: [CommonModule, CourseComponent],
    template: `
    <div class="container">
      <h1 class="text-center my-4 ">{{ categoryName }}</h1>
      <div class="row">
        <div class="col-md-4 mb-3" *ngFor="let course of courses">
          <app-course [course]="course"></app-course>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .container {
      margin: 0 auto;
      padding: 20px;
    }
    .text-center {
      text-align: center;
      color: #465587;
    }
  `]
})
export class CategoryDetailsComponent implements OnInit {
    categoryName: string = '';
    courses: any[] = [];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const categoryId = +params['id'];
            this.categoryName = this.getCategoryName(categoryId);
            const categoryCourses: { [key: number]: { title: string; description: string; imageUrl: string; }[] } = {
                1: [
                    {
                        title: 'HTML & CSS Fundamentals',
                        description: 'Learn the basics of HTML and CSS to create stunning web pages.',
                        imageUrl: '/assets/images/catg/web/web1.jpg'
                    },
                    {
                        title: 'JavaScript Essentials',
                        description: 'Understand the core concepts of JavaScript programming.',
                        imageUrl: '/assets/images/catg/web/web2.jpeg'
                    },
                    {
                        title: 'Responsive Web Design',
                        description: 'Learn how to create responsive web pages with CSS Flexbox and Grid.',
                        imageUrl: '/assets/images/catg/web/web3.jpg'
                    },
                    {
                        title: 'React for Beginners',
                        description: 'Get started with React to build interactive user interfaces.',
                        imageUrl: '/assets/images/catg/web/web4.jpg'
                    },
                    {
                        title: 'Angular Fundamentals',
                        description: 'Learn the basics of Angular to build dynamic web applications.',
                        imageUrl: '/assets/images/catg/web/web5.jpeg'
                    },
                    {
                        title: 'Vue.js Essentials',
                        description: 'Understand the core concepts of Vue.js to build interactive web apps.',
                        imageUrl: '/assets/images/catg/web/web6.jpg'
                    },
                    {
                        title: 'SASS for Web Developers',
                        description: 'Learn SASS to write better CSS code and improve your workflow.',
                        imageUrl: '/assets/images/catg/web/web7.jpg'
                    },
                    {
                        title: 'Bootstrap 4 Basics',
                        description: 'Get started with Bootstrap 4 to create responsive web designs.',
                        imageUrl: '/assets/images/catg/web/web8.jpg'
                    },

                ],
                2: [
                    {
                        title: 'Introduction to Swift',
                        description: 'Get started with Swift programming for iOS development.',
                        imageUrl: '/assets/images/catg/mob/mob1.jpg'
                    },
                    {
                        title: 'Kotlin for Android',
                        description: 'Learn Kotlin to build Android applications.',
                        imageUrl: '/assets/images/catg/mob/mob2.png'
                    },
                    {
                        title: 'React Native Basics',
                        description: 'Understand the core concepts of React Native for cross-platform app development.',
                        imageUrl: '/assets/images/catg/mob/mob3.jpg'
                    },
                    {
                        title: 'Flutter for Beginners',
                        description: 'Get started with Flutter to build beautiful mobile apps.',
                        imageUrl: '/assets/images/catg/mob/mob4.jpg'
                    },
                    {
                        title: 'Ionic Framework Essentials',
                        description: 'Learn to build mobile apps using the Ionic framework.',
                        imageUrl: '/assets/images/catg/mob/mob5.jpg'
                    },
                    {
                        title: 'Xamarin for Mobile Development',
                        description: 'Understand Xamarin to build native mobile apps for iOS and Android.',
                        imageUrl: '/assets/images/catg/mob/mob6.jpg'
                    },
                ],
                3: [
                    {
                        title: 'Data Analysis with Python',
                        description: 'Analyze data using Python libraries like Pandas and NumPy.',
                        imageUrl: '/assets/images/catg/da/da1.jpg'
                    },
                    {
                        title: 'Machine Learning Basics',
                        description: 'Introduction to machine learning concepts and algorithms.',
                        imageUrl: '/assets/images/catg/da/da2.jpg'
                    },
                    {
                        title: 'Deep Learning Fundamentals',
                        description: 'Understand deep learning techniques and neural networks.',
                        imageUrl: '/assets/images/catg/da/da3.jpg'
                    },
                    {
                        title: 'Big Data Analytics',
                        description: 'Learn to analyze and process big data using Hadoop and Spark.',
                        imageUrl: '/assets/images/catg/da/da4.jpg'
                    },
                    {
                        title: 'Data Visualization with Tableau',
                        description: 'Create interactive data visualizations using Tableau software.',
                        imageUrl: '/assets/images/catg/da/da5.jpg'
                    },
                ],
                4: [
                    {
                        title: 'Unity Game Development',
                        description: 'Create 2D and 3D games using Unity engine.',
                        imageUrl: '/assets/images/catg/game/game1.png'
                    },
                    {
                        title: 'Unreal Engine for Beginners',
                        description: 'Learn to develop games with Unreal Engine.',
                        imageUrl: '/assets/images/catg/game/game2.jpg'
                    },
                    {
                        title: 'Game Design Fundamentals',
                        description: 'Understand the basics of game design and development.',
                        imageUrl: '/assets/images/catg/game/game3.jpeg'
                    },
                    {
                        title: 'C# Programming for Games',
                        description: 'Learn C# programming for game development in Unity.',
                        imageUrl: '/assets/images/catg/game/game4.jpg'
                    },
                    {
                        title: 'Game Development with Godot',
                        description: 'Get started with Godot game engine to create 2D and 3D games.',
                        imageUrl: '/assets/images/catg/game/game5.jpg'
                    },
                ],
                5: [
                    {
                        title: 'Docker Essentials',
                        description: 'Learn the basics of Docker and containerization.',
                        imageUrl: '/assets/images/catg/devops/d1.jpg'
                    },
                    {
                        title: 'Kubernetes for Developers',
                        description: 'Understand Kubernetes and its use in DevOps.',
                        imageUrl: '/assets/images/catg/devops/d2.png'
                    },
                    {
                        title: 'Jenkins CI/CD Pipeline',
                        description: 'Learn to set up a CI/CD pipeline using Jenkins.',
                        imageUrl: '/assets/images/catg/devops/d3.png'
                    },
                    {
                        title: 'Ansible Automation',
                        description: 'Get started with Ansible for IT automation and configuration management.',
                        imageUrl: '/assets/images/catg/devops/d4.png'
                    },
                ],
                6: [
                    {
                        title: 'Introduction to Machine Learning',
                        description: 'Learn the fundamentals of machine learning.',
                        imageUrl: '/assets/images/catg/machine/m1.jpg'
                    },
                    {
                        title: 'Deep Learning with TensorFlow',
                        description: 'Explore deep learning techniques using TensorFlow.',
                        imageUrl: '/assets/images/catg/machine/m2.jpeg'
                    },
                    {
                        title: 'Natural Language Processing',
                        description: 'Understand NLP techniques and tools.',
                        imageUrl: '/assets/images/catg/machine/m3.jpg'
                    },
                    {
                        title: 'Computer Vision Basics',
                        description: 'Learn the basics of computer vision and image processing.',
                        imageUrl: '/assets/images/catg/machine/m4.jpg'
                    }
                ],
                7: [
                    {
                        title: 'Cyber Security Basics',
                        description: 'Understand the basics of cyber security and protection.',
                        imageUrl: '/assets/images/catg/cyber/cyber1.jpeg'
                    },
                    {
                        title: 'Ethical Hacking',
                        description: 'Learn ethical hacking techniques and tools.',
                        imageUrl: '/assets/images/catg/cyber/cyber2.jpeg'
                    },
                    {
                        title: 'Network Security Fundamentals',
                        description: 'Understand network security concepts and practices.',
                        imageUrl: '/assets/images/catg/cyber/cyber3.jpeg'
                    },
                    {
                        title: 'Incident Response and Forensics',
                        description: 'Learn to respond to security incidents and perform digital forensics.',
                        imageUrl: '/assets/images/catg/cyber/cyber4.jpeg'
                    }
                ],
                8: [
                    {
                        title: 'AWS Cloud Practitioner',
                        description: 'Get started with AWS cloud services.',
                        imageUrl: '/assets/images/catg/cloud/cloud1.jpeg'
                    },
                    {
                        title: 'Azure Fundamentals',
                        description: 'Learn the basics of Microsoft Azure.',
                        imageUrl: '/assets/images/catg/cloud/cloud2.jpeg'
                    },
                    {
                        title: 'Google Cloud Platform Basics',
                        description: 'Understand the core concepts of Google Cloud Platform.',
                        imageUrl: '/assets/images/catg/cloud/cloud3.jpg'
                    },
                    {
                        title: 'Cloud Security Essentials',
                        description: 'Learn to secure cloud infrastructure and applications.',
                        imageUrl: '/assets/images/catg/cloud/cloud4.jpeg'
                    },
                ],
                9: [
                    {
                        title: 'Software Testing Basics',
                        description: 'Introduction to software testing principles and practices.',
                        imageUrl: '/assets/images/catg/testing/test1.jpg'
                    },
                    {
                        title: 'Automated Testing with Selenium',
                        description: 'Learn to automate tests using Selenium.',
                        imageUrl: '/assets/images/catg/testing/test2.jpg'
                    },
                    {
                        title: 'Performance Testing with JMeter',
                        description: 'Understand performance testing using Apache JMeter.',
                        imageUrl: '/assets/images/catg/testing/test3.jpg'
                    },
                    {
                        title: 'API Testing with Postman',
                        description: 'Learn to test APIs using Postman.',
                        imageUrl: '/assets/images/catg/testing/test4.jpg'
                    }
                ],
                10: [
                    {
                        title: 'Introduction to Python',
                        description: 'Learn the basics of Python programming.',
                        imageUrl: '/assets/images/catg/lang/lang1.png'
                    },
                    {
                        title: 'Java Programming',
                        description: 'Understand the core concepts of Java programming.',
                        imageUrl: '/assets/images/catg/lang/lang2.jpeg'

                    }, {
                        title: 'C++ Programming Basics',
                        description: 'Get started with C++ programming language.',
                        imageUrl: '/assets/images/catg/lang/lang3.png'
                    },
                    {
                        title: 'Ruby Programming Fundamentals',
                        description: 'Learn the basics of Ruby programming language.',
                        imageUrl: '/assets/images/catg/lang/lang4.jpeg'
                    },
                    {
                        title: 'PHP Programming Basics',
                        description: 'Get started with PHP programming language.',
                        imageUrl: '/assets/images/catg/lang/lang5.jpeg'
                    },
                    {
                        title: 'JavaScript Fundamentals',
                        description: 'Learn the basics of JavaScript programming.',
                        imageUrl: '/assets/images/catg/lang/lang6.jpg'
                    }
                ]
            };

            this.courses = categoryCourses[categoryId] || [];
        });
    }


    getCategoryName(categoryId: number): string {
        // Map category IDs to names
        const categoryNames: { [key: number]: string } = {
            1: 'Web Development',
            2: 'Mobile Development',
            3: 'Data Science',
            4: 'Game Development',
            5: 'DevOps',
            6: 'Machine Learning',
            7: 'Cyber Security',
            8: 'Cloud Computing',
            9: 'Software Testing',
            10: 'Programming Languages'
        };
        return categoryNames[categoryId] || 'Unknown Category';
    }

}
