import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  TableHeaderItem,
  TableItem,
  TableModel,
  TableRowSize,
} from 'carbon-components-angular';

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

  constructor() {}

  ngOnInit(): void {
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
    model.data = [
      [
        new TableItem({ data: 'Titulo 1' }),
        new TableItem({ data: 10 }),
        new TableItem({ data: 10 }),
      ],
      [
        new TableItem({ data: 'Titulo 2' }),
        new TableItem({ data: 20}),
        new TableItem({ data: 20 }),
      ],
      [
        new TableItem({ data: 'Titulo 3' }),
        new TableItem({ data: 30 }),
        new TableItem({ data: 30 }),
      ],
      [
        new TableItem({ data: 'Titulo 4' }),
        new TableItem({ data: 40 }),
        new TableItem({ data: 40 }),
      ],
      [
        new TableItem({ data: 'Titulo 5' }),
        new TableItem({ data: 50 }),
        new TableItem({ data: 50 }),
      ],
    ];

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
