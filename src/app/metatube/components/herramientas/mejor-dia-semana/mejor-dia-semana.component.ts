import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/metatube/store';

@Component({
  selector: 'app-mejor-dia-semana',
  templateUrl: './mejor-dia-semana.component.html',
  styleUrls: ['./mejor-dia-semana.component.scss']
})
export class MejorDiaSemanaComponent implements OnInit {

  punchCardOpts : any;

  data$ : Observable<[]>;

  constructor(private store: Store<AppState>) {
    this.data$ = this.store.select(state => state.proyectos.grafica_mejor_dia);

    this.data$.subscribe((data)=>{
      this.createPunchCard(data);
    });
  }

  ngOnInit(): void {

  }

  createPunchCard(data) {
    const hours = [
      '12a','1a', '2a', '3a', '4a', '5a', '6a',
      '7a', '8a', '9a', '10a', '11a','12p',
      '1p', '2p', '3p', '4p', '5p','6p',
      '7p', '8p', '9p', '10p', '11p']
    const days = [
      'Domingo',
      'Sabado',
      'Viernes',
      'Jueves',
      'Miercoles',
      'Martes',
      'Lunes',
    ];


    data = data.map(function (item) {
      return [item[1], item[0], item[2]*20]
    });

    this.punchCardOpts = {
      title: {
        text: '',
        link: ''
      },
      tooltip: {
        position: 'top',
        formatter: function (params) {
          return ''; //params.value[2] + ' users in ' + hours[params.value[0]] + ' of ' + days[params.value[1]]
        }
      },
      grid: {
        left: 2,
        bottom: 0,
        right: 20,
        top: 0,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          fontSize: 10,
        }
      },
      yAxis: {
        type: 'category',
        data: days,
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLabel: {
          fontSize: 10,
        }
      },
      series: [{
        name: 'Punch Card',
        type: 'scatter',
        symbolSize: function (val) {
          return val[2] * 2
        },
        data: data,
        animationDelay: function (idx) {
          return idx * 5
        }
      }]
    }
  }

}
