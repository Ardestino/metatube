import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  TableHeaderItem,
  TableItem,
  TableModel,
  TableRowSize,
} from 'carbon-components-angular';
import { AIService } from "src/api";


@Component({
  selector: 'app-topics-similares',
  templateUrl: './topics-similares.component.html',
  styleUrls: ['./topics-similares.component.scss']
})
export class TopicsSimilaresComponent implements OnInit {

  model = new TableModel();
  size: TableRowSize = 'sh';
  skeleton = true;
  searchText: '';

  @ViewChild('totalHeaderTemplate', { static: true })
  totalHeaderTemplate: TemplateRef<any>;
  @ViewChild('proficiencyTemplate', { static: true })
  proficiencyTemplate: TemplateRef<any>;
  @ViewChild('totalTemplate', { static: true }) totalTemplate: TemplateRef<any>;
  @ViewChild('onlineTemplate', { static: true })
  onlineTemplate: TemplateRef<any>;

  constructor(private apiAI : AIService) {}

  ngOnInit(): void {}

  valueChange(event){
    this.searchText = event;
    this.skeleton = true;
  }

  onSearch(event){
    this.apiAI.aIGetRelatedTopicsCreate(this.searchText).subscribe((data)=>{
      this.generateTable(data[this.searchText]['rising']);
      this.skeleton = false;
    })
  }

  onClear(event){
    this.skeleton = true;
    this.searchText = '';
  }

  generateTable(data){
    const model = new TableModel();
    model.header = [
      new TableHeaderItem({
        data: 'Titulo',
        className: 'items-center font-bold',
      }),
      new TableHeaderItem({
        data: 'Similitud',
        className: 'items-center',
      }),
      new TableHeaderItem({
        data: 'Valor',
        className: 'items-center',
      })
    ];
    model.data = data.map(row =>
      [
        new TableItem({ data: row.topic_title }),
        new TableItem({ data: row.value }),
        new TableItem({ data: row.topic_type }),
      ]
    );

    // Cambiar el tipo de template de la columna
    model.data.map((data) => {
      data[1] = new TableItem({
        data: data[1].data,
        template: this.proficiencyTemplate,
        className: 'items-center',
      });
      return data;
    });
    this.model = model;
  }
}
