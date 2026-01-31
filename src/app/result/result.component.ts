import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizStateService } from '../quiz-state.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],   // ✅ VERY IMPORTANT
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  constructor(public quizState: QuizStateService, private router: Router) {}

  restartQuiz() {
    this.quizState.score = 0;
    this.quizState.currentQuestion = 0;
    this.router.navigate(['/']);
  }
}
