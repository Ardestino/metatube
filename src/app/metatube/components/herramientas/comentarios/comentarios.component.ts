import { Component, OnInit } from '@angular/core';
import { PaginationModel } from 'carbon-components-angular';
import { CommentsService, Comment } from 'src/api';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit {
  comentarios: Comment[];
  model = new PaginationModel();
  pageLenght = 5;

  constructor(private commentsApi: CommentsService) {}

  ngOnInit(): void {
    this.model.pageLength = this.pageLenght;
    this.selectPage(1);
  }
  selectPage(page) {
    const offset = page * this.pageLenght


    this.commentsApi
      .commentsList(this.pageLenght, offset)
      .subscribe((comments) => {
        this.comentarios = comments.results;
        this.model.pageLength = this.pageLenght;
        this.model.currentPage = page;
        this.model.totalDataLength = comments.count;
      });
    this.model.currentPage = page;
  }
}
