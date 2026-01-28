import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizStateService {
  currentQuestion = 0;
  score = 0;

  reset() {
    this.currentQuestion = 0;
    this.score = 0;
  }
}
