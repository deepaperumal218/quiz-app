import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizStateService } from '../quiz-state.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {

  category: string = '';
  questions: any[] = [];

  showCorrect = false;
  showWrong = false;

  // TIMER
  timeLeft = 10;
  timerInterval: any;

  // CATEGORY QUESTIONS
adtechQuestions = [
  { q: "What is AdTech?", options: ["Advertising Technology", "Application Tech", "Admin Tool", "Ad Tracker"], ans: 0 },
  { q: "What is an Impression?", options: ["Ad click", "Ad displayed", "User login", "Ad payment"], ans: 1 },
  { q: "What is CTR?", options: ["Click Through Rate", "Cost To Run", "Customer Traffic Rate", "Click Time Ratio"], ans: 0 },
  { q: "What is CPM?", options: ["Cost Per Month", "Cost Per Mille", "Customer Per Month", "Click Per Media"], ans: 1 },
  { q: "What is CPC?", options: ["Cost Per Click", "Cost Per Customer", "Click Per Cost", "Customer Paid Click"], ans: 0 },
  { q: "What is DSP?", options: ["Demand Side Platform", "Data Service Platform", "Digital Sales Platform", "Display System Program"], ans: 0 },
  { q: "What is SSP?", options: ["Supply Side Platform", "Service System Program", "Sales Side Platform", "System Supply Program"], ans: 0 },
  { q: "What is RTB?", options: ["Real Time Buying", "Real Time Bidding", "Rate To Buy", "Run Time Bidding"], ans: 1 },
  { q: "What is DMP?", options: ["Data Management Platform", "Digital Marketing Program", "Demand Media Platform", "Data Media Program"], ans: 0 },
  { q: "What is Conversion?", options: ["User action completed", "Ad view", "Ad click", "User logout"], ans: 0 }
];
marketingQuestions = [
  { q: "SEO stands for?", options: ["Search Engine Optimization", "Social Email Option", "System Engine Output", "Search Email Online"], ans: 0 },
  { q: "SEM means?", options: ["Search Engine Marketing", "System Email Marketing", "Search Engine Media", "Social Engine Marketing"], ans: 0 },
  { q: "What is a keyword?", options: ["Search term", "Email", "Password", "URL"], ans: 0 },
  { q: "What is PPC?", options: ["Pay Per Click", "Pay Per Customer", "Price Per Click", "Profit Per Click"], ans: 0 },
  { q: "Landing page means?", options: ["Home page", "Ad entry page", "Contact page", "Login page"], ans: 1 },
  { q: "Organic traffic means?", options: ["Free traffic", "Paid traffic", "Bot traffic", "Fake traffic"], ans: 0 },
  { q: "Backlink means?", options: ["External link", "Internal link", "Broken link", "Local link"], ans: 0 },
  { q: "Content marketing means?", options: ["Marketing using content", "TV ads", "Radio ads", "Print ads"], ans: 0 },
  { q: "Email marketing means?", options: ["Ads by email", "Ads by TV", "Ads by SMS", "Ads by radio"], ans: 0 },
  { q: "Social media marketing means?", options: ["Ads on social platforms", "Radio ads", "TV ads", "Newspaper ads"], ans: 0 }
];

  mediaQuestions = [
  { q: "Media buying means?", options: ["Buying ad space", "Buying TV", "Buying phones", "Buying websites"], ans: 0 },
  { q: "Ad inventory means?", options: ["Available ad space", "Products", "Users", "Ads cost"], ans: 0 },
  { q: "Programmatic ads means?", options: ["Automated ads", "Manual ads", "Free ads", "TV ads"], ans: 0 },
  { q: "Targeting means?", options: ["Show ads to specific users", "Block ads", "Show ads to all", "Stop ads"], ans: 0 },
  { q: "Frequency capping means?", options: ["Limit ad display", "Block ads", "Increase ads", "Stop campaigns"], ans: 0 },
  { q: "Viewability means?", options: ["Ad visible", "Ad clicked", "Ad blocked", "Ad paid"], ans: 0 },
  { q: "Publisher means?", options: ["Website owner", "User", "Advertiser", "Developer"], ans: 0 },
  { q: "Advertiser means?", options: ["Company running ads", "User", "Publisher", "Developer"], ans: 0 },
  { q: "Audience segmentation means?", options: ["Grouping users", "Deleting users", "Blocking users", "Selling users"], ans: 0 },
  { q: "Geo targeting means?", options: ["Target by location", "Target by age", "Target by gender", "Target by device"], ans: 0 }
];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public quizState: QuizStateService
  ) {}

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category') || '';

    if (this.category == 'adtech') this.questions = this.adtechQuestions;
    if (this.category == 'marketing') this.questions = this.marketingQuestions;
    if (this.category == 'media') this.questions = this.mediaQuestions;

    this.quizState.currentQuestion = 0;
    this.quizState.score = 0;

    this.startTimer();
  }

  // TIMER
  startTimer() {
    this.timeLeft = 10;
    this.timerInterval = setInterval(() => {
      this.timeLeft--;

      if (this.timeLeft == 0) {
        this.nextQuestion();
      }
    }, 1000);
  }

  nextQuestion() {
    clearInterval(this.timerInterval);
    this.quizState.currentQuestion++;

    if (this.quizState.currentQuestion < this.questions.length) {
      this.startTimer();
    } else {
      this.router.navigate(['/result']);
    }
  }

  // ✅ ONLY ONE selectAnswer FUNCTION (WITH POPUP)
  selectAnswer(i: number) {

    if (i === this.questions[this.quizState.currentQuestion].ans) {
      this.quizState.score++;
      this.showCorrect = true;
    } else {
      this.showWrong = true;
    }

    setTimeout(() => {
      this.showCorrect = false;
      this.showWrong = false;
      this.nextQuestion();
    }, 2000);
  }

}
