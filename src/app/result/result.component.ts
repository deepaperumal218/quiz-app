import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizStateService } from '../quiz-state.service';
@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],   // ✅ THIS IS THE FIX
  templateUrl: './result.component.html'
})
export class ResultComponent {

  score = history.state.score || 0;

 constructor(private router: Router, private quizState: QuizStateService) {}
restartQuiz() {
  this.quizState.reset();     // reset question & score
  this.router.navigate(['/']); // go to first question
}
}

