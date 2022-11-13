import { Component, OnInit } from '@angular/core';
import { CommentsService, Comment } from 'src/api';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  comentarios : Comment[];

  ngOnInit(): void {
  }

  constructor(private commentsApi : CommentsService) {
    commentsApi.commentsList(10).subscribe(comments =>{
      this.comentarios = comments.results;
    })
   }

}
