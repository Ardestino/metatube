import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Answer, Question, ApiService, User  } from "src/api/index";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit {

  questions: Observable<Question[]>;

  user : Observable<User>;

  constructor(private apiService: ApiService ) { }

  ngOnInit(): void {
  }

  public refreshQuestions() {
    console.log("Click");
    this.questions = this.apiService.apiV1QuestionsList();

    this.user = this.apiService.apiV1UsersRetrieve(1);
  }
}