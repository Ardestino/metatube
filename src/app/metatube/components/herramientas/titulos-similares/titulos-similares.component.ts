import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  TableHeaderItem,
  TableItem,
  TableModel,
  TableRowSize,
} from 'carbon-components-angular';
import { AIService } from "src/api";

@Component({
  selector: 'app-titulos-similares',
  templateUrl: './titulos-similares.component.html',
  styleUrls: ['./titulos-similares.component.scss'],
})
export class TitulosSimilaresComponent implements OnInit {
  model = new TableModel();
  size: TableRowSize = 'sh';
  skeleton: true;

  @ViewChild('totalHeaderTemplate', { static: true })
  totalHeaderTemplate: TemplateRef<any>;
  @ViewChild('proficiencyTemplate', { static: true })
  proficiencyTemplate: TemplateRef<any>;
  @ViewChild('totalTemplate', { static: true }) totalTemplate: TemplateRef<any>;
  @ViewChild('onlineTemplate', { static: true })
  onlineTemplate: TemplateRef<any>;

  constructor(private apiAI : AIService) {}

  ngOnInit(): void {
    this.apiAI.aIGetRelatedSearchsCreate('Minecraft').subscribe((data)=>{
      this.generateTable(data['Minecraft']['top']);
    })
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
    console.log(data);
    model.data = data.map(row =>
      [
        new TableItem({ data: row.query }),
        new TableItem({ data: row.value }),
        new TableItem({ data: row.value }),
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
