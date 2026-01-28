
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizStateService } from '../quiz-state.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

  questions = [
    {
      question: "What is AdTech?",
      options: ["Programming language", "Advertising Technology", "Database", "Browser"],
      answer: 1
    },
    {
      question: "What is an Ad Slot?",
      options: ["Video", "Space for ads", "Email", "Mobile App"],
      answer: 1
    },
    {
      question: "What is an Impression?",
      options: ["Click", "Ad Display", "Purchase", "Download"],
      answer: 1
    },
    {
      question: "What is Conversion?",
      options: ["View", "Click", "Goal completion", "Refresh"],
      answer: 2
    },
    {
      question: "CPM means?",
      options: ["Cost Per Month", "Cost Per Mille", "Cost Per Media", "Cost Per Money"],
      answer: 1
    },
    {
      question: "DSP is used by?",
      options: ["Publishers", "Advertisers", "Users", "Banks"],
      answer: 1
    },
    {
      question: "SSP is used by?",
      options: ["Advertisers", "Publishers", "Students", "Users"],
      answer: 1
    },
    {
      question: "DMP is used for?",
      options: ["Coding", "Managing Data", "Email", "Music"],
      answer: 1
    },
    {
      question: "Native ads are designed to?",
      options: ["Block content", "Blend with content", "Only video", "Only audio"],
      answer: 1
    },
    {
      question: "Audio ads are used in?",
      options: ["TV", "Podcasts", "SMS", "Email"],
      answer: 1
    },
    {
      question: "Contextual targeting is based on?",
      options: ["Age", "Website Content", "Password", "Bank details"],
      answer: 1
    },
    {
      question: "Geolocation targeting uses?",
      options: ["Cookies", "IP or GPS", "Username", "Email"],
      answer: 1
    },
    {
      question: "Ad Server means?",
      options: ["Game server", "System delivering ads", "Database", "Browser"],
      answer: 1
    },
    {
      question: "RTB means?",
      options: ["Real Time Buy", "Real Time Bidding", "Run Time Browser", "Random Tech Buy"],
      answer: 1
    },
    {
      question: "Inventory means?",
      options: ["Products", "Available Ad Space", "Users", "Money"],
      answer: 1
    }
  ];

 get currentQuestion() {
  return this.quizState.currentQuestion;
}

get score() {
  return this.quizState.score;
}

  showCorrect = false;
  showWrong = false;

 constructor(private router: Router, public quizState: QuizStateService) {}

selectAnswer(i: number) {

  if (i === this.questions[this.quizState.currentQuestion].answer) {
    this.quizState.score++;
    this.showCorrect = true;
  } else {
    this.showWrong = true;
  }

  setTimeout(() => {
    this.showCorrect = false;
    this.showWrong = false;
    this.quizState.currentQuestion++;

    if (this.quizState.currentQuestion == this.questions.length) {
      this.router.navigate(['/result'], { state: { score: this.quizState.score } });
    }
  }, 2000);
}

}
