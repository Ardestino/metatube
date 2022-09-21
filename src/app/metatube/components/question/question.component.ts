import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Answer, Question, QuestionsService } from "../../../../api/index";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit {

  questions: Observable<Question[]> = of([{
    question: "Hola",
    category: "Categoria"
  }]);

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
  }

  public refreshQuestions() {
    console.log("Click");
    this.questions = this.questionService.questionsList();
  }
}