import { Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../searchbar/searchbar.component';

export interface Course {
  name: string;
  description: string;
  image: string;
}

export interface Category {
  name: string;
  courses: Course[]; // courses for that specific category
}

export interface Goal {
  name: string;
  categories: Category[]; // list of categories like MYP, DP, etc.
}

@Component({
  selector: 'app-goal',
  imports: [CommonModule, CourseCardComponent, SearchbarComponent], 
  templateUrl: './goal.component.html',
})
export class GoalComponent {
   goals: Goal[] = [
    {
      name: 'IB',
      categories: [
        {
          name: 'MYP4',
          courses: [
            { name: 'Extended Mathematics', description: '8 lessons', image: 'assets/mathai.png' },
            { name: 'Standard Mathematics', description: '8 lessons', image: 'assets/math.png' },
            { name: 'Physics', description: '8 lessons', image: 'assets/physics.png' },
            { name: 'Chemistry', description: '8 lessons', image: 'assets/chemistry.png' },
            { name: 'Biology', description: '8 lessons', image: 'assets/biology.png' },
          ],
        },
        {
          name: 'MYP5',
          courses: [
            { name: 'Extended Mathematics', description: '8 lessons', image: 'assets/mathai.png' },
            { name: 'Standard Mathematics', description: '8 lessons', image: 'assets/math.png' },
            { name: 'Physics', description: '8 lessons', image: 'assets/physics.png' },
            { name: 'Chemistry', description: '8 lessons', image: 'assets/chemistry.png' },
            { name: 'Biology', description: '8 lessons', image: 'assets/biology.png' },
          ],
        },
        {
          name: 'DP1',
          courses: [
            { name: 'Math AA', description: 'Math for DP1 students', image: 'assets/math.png' },
            { name: 'Math AI', description: 'Math for DP1 students', image: 'assets/mathai.png' },
            { name: 'Physics', description: 'Science for MYP5 students', image: 'assets/physics.png' },
            { name: 'Chemistry', description: 'Science for MYP5 students', image: 'assets/chemistry.png' },
            { name: 'Biology', description: 'Science for MYP5 students', image: 'assets/biology.png' },
          ],
        },
        {
          name: 'DP2',
          courses: [
            { name: 'Math AA', description: 'Math for DP1 students', image: 'assets/math.png' },
            { name: 'Math AI', description: 'Math for DP1 students', image: 'assets/mathai.png' },
            { name: 'Physics', description: 'Science for MYP5 students', image: 'assets/physics.png' },
            { name: 'Chemistry', description: 'Science for MYP5 students', image: 'assets/chemistry.png' },
            { name: 'Biology', description: 'Science for MYP5 students', image: 'assets/biology.png' },
          ],
        },
      ],
    },
    {
      name: 'Cambridge',
      categories: [
        {
          name: 'IGCSE Grade9',
          courses: [
            { name: 'Extended Mathematics (0580)', description: 'Math for O Levels', image: 'assets/mathai.png' },
            { name: 'Extended Physics (0625)', description: 'Math for O Levels', image: 'assets/physics.png' },
            { name: 'Extended Chemistry (0620)', description: 'Math for O Levels', image: 'assets/chemistry.png' },
            { name: 'Extended Biology (0610)', description: 'Math for O Levels', image: 'assets/biology.png' },
          ],
        },
        {
          name: 'IGCSE Grade10',
          courses: [
            { name: 'Extended Mathematics (0580)', description: 'Math for O Levels', image: 'assets/mathai.png' },
            { name: 'Extended Physics (0625)', description: 'Math for O Levels', image: 'assets/physics.png' },
            { name: 'Extended Chemistry (0620)', description: 'Math for O Levels', image: 'assets/chemistry.png' },
            { name: 'Extended Biology (0610)', description: 'Math for O Levels', image: 'assets/biology.png' },
          ],
        },
      ],
    },
    {
      name: 'AP',
      categories: [
        {
          name: 'Math',
          courses: [
            { name: 'AP Precalculus', description: 'Unit 1: Biology Basics', image: 'assets/Precalculus.png' },
            { name: 'AP Calculus AB', description: 'Unit 1: Biology Basics', image: 'assets/CalculusAB.png' },
            { name: 'AP Calculus BC', description: 'Unit 1: Biology Basics', image: 'assets/CalculusBC.png' },
            { name: 'AP Statistics', description: 'Unit 1: Biology Basics', image: 'assets/Statistics.png' },
          ],
        },
        {
          name: 'Physics',
          courses: [
            { name: 'AP Physics 1', description: 'Unit 1: Early American History', image: 'ap-history.jpg' },
            { name: 'AP Physics 2', description: 'Unit 2: Civil War Era', image: 'ap-history-unit2.jpg' },
            { name: 'AP Physics C: Mechanics', description: 'Unit 2: Civil War Era', image: 'ap-history-unit2.jpg' },
            { name: 'AP Physics C: Electricity and Magnetism', description: 'Unit 2: Civil War Era', image: 'ap-history-unit2.jpg' },
          ],
        },
        {
          name: 'Chemistry',
          courses: [
            { name: 'AP Chemistry', description: 'Unit 1: Early American History', image: 'ap-history.jpg' },
          ],
        },
        {
          name: 'Biology',
          courses: [
            { name: 'AP Biology', description: 'Unit 1: Early American History', image: 'ap-history.jpg' },
          ],
        },
      ],
    },
  ];

  selectedGoal: string = ''; // Keeps track of the selected goal
  selectedCategory: string = ''; // Keeps track of the selected category
  selectedCourses: Course[] = []; // Stores the courses for the selected category under the goal
  selectedGoalCategories: Category[] = []; // Store the categories of the selected goal

  // Method to update the selected courses based on goal and category
  onGoalSelect(goalName: string): void {
    this.selectedGoal = goalName;
    this.selectedCategory = ''; // Reset category when changing goal
    this.selectedCourses = []; // Reset courses
    const selectedGoal = this.goals.find(goal => goal.name === goalName);
    this.selectedGoalCategories = selectedGoal ? selectedGoal.categories : [];
     console.log('Selected Goal:', this.selectedGoal);
  console.log('Categories:', this.selectedGoalCategories);
  }

  onCategorySelect(categoryName: string): void {
    this.selectedCategory = categoryName;
    const selectedGoal = this.goals.find(goal => goal.name === this.selectedGoal);
    const selectedCategory = selectedGoal?.categories.find(category => category.name === categoryName);
    this.selectedCourses = selectedCategory ? selectedCategory.courses : [];
     console.log('Selected Category:', this.selectedCategory);
  console.log('Courses:', this.selectedCourses);
  }
}
