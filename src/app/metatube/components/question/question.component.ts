import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Answer, Question, QuestionsService, User, UsersService } from "../../../../api/index";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit {

  questions: Observable<Question[]> = of([{
    question: "Hola",
    category: "Categoria"
  }]);

  user : Observable<User>;

  constructor(private questionService: QuestionsService, private userService: UsersService ) { }

  ngOnInit(): void {
  }

  public refreshQuestions() {
    console.log("Click");
    this.questions = this.questionService.questionsList();

    this.user = this.userService.usersRead(1);
  }
}