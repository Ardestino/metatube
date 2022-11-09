import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

type EChartsOption = echarts.EChartsOption;

export interface Graph {
  nodes:      Node[];
  links:      Link[];
  categories: Category[];
}

export interface Category {
  name: string;
}

export interface Link {
  source: string;
  target: string;
}

export interface Node {
  id:         string;
  name:       string;
  symbolSize: number;
  x:          number;
  y:          number;
  value:      number;
  category:   number;
}


@Component({
  selector: 'app-grafo-dirigido',
  templateUrl: './grafo-dirigido.component.html',
  styleUrls: ['./grafo-dirigido.component.scss'],
})
export class GrafoDirigidoComponent implements OnInit  {

  options: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Graph>('./assets/data/les-miserables.json').subscribe((graph)=>{
      this.options = of({
        tooltip: {},
        legend: [
          {
            data: graph.categories.map(function (a: { name: string }) {
              return a.name;
            })
          }
        ],
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'none',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              show: true,
              position: 'right',
              formatter: '{b}'
            },
            labelLayout: {
              hideOverlap: true
            },
            scaleLimit: {
              min: 0.4,
              max: 2
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3
            }
          }
        ]
      })
    });
  }

  // ngAfterViewInit(): void {
  //   var myChart = echarts.init(this.chartDom);
  //   //var option: EChartsOption;


  // }

  // ngOnInit(): void {
  // }
}
