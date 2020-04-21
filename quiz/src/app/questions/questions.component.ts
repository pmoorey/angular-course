import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question = '';
  questionStatus = '';
  constructor() { }

  ngOnInit(): void {
  }
  onInputUpdateQuestion(event: Event) {
    this.question = (<HTMLInputElement>event.target).value;
  }
  onClickAddQuestion() {
    this.questionStatus = 'Added question: '+this.question;
  }
}
