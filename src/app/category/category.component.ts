import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'] 
})
export class CategoryComponent {

  constructor(private router: Router) {}

  startQuiz(category: string) {
    this.router.navigate(['/quiz', category]);
    document.body.classList.add('flash');
  setTimeout(() => document.body.classList.remove('flash'), 200);

    
  }
  
}
