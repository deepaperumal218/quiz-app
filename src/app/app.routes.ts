import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'quiz/:category', component: QuizComponent },
  { path: 'result', component: ResultComponent }
];
