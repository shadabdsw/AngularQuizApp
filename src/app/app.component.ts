import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizApp';
  quiz: Observable<any>;
  errorMessage='';
  public isCollapsed = false;
  constructor(private quizques: service) {
     this.quiz = this.quizques.getQuiz();
    }
  
}
