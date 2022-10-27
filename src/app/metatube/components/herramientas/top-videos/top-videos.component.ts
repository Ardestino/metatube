import { Component, OnInit } from '@angular/core';
import { ListItem } from 'carbon-components-angular';

@Component({
  selector: 'app-top-videos',
  templateUrl: './top-videos.component.html',
  styleUrls: ['./top-videos.component.scss']
})
export class TopVideosComponent implements OnInit {

  miniChart2 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: 'Browsers',
        type: 'pie',
        radius: '75%',
        center: ['50%', '50%'],
        data: [
          {value: 335, name: 'Explorer'},
          {value: 310, name: 'Firefox'},
          {value: 234, name: 'Edge'},
          {value: 135, name: 'Safari'},
          {value: 1548, name: 'Chrome'}
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  public comboboxItems : ListItem[] = [
    {
      content: "Ultimos 7 dias",
      selected: true
    },
    {
      content: "Ultimo Mes",
      selected: false
    },
    {
      content: "Ultimo Año",
      selected: false
    }
  ]

  videos = [
    {
      url_video : "https://www.youtube.com/watch?v=TeB7BucZlWM&ab_channel=Black%26WhiteMusic",
      thumbnail_url : "https://i.ytimg.com/vi/TeB7BucZlWM/hqdefault_live.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcRgdUqWHSozu5bi0AcYQJBIgp2Q",
      nombre_video : "MUSICA MÁS ESCUCHADAS 2022 - Famosas canciones de música extranjera que la gente busca en 2022 #84",
      sentimientos : "",
      comentarios : "319",
      vistas : "3.1M",
      likes : "114230",
      tiempo_visualizacion : "10000"
    },{
      url_video : "https://www.youtube.com/watch?v=TeB7BucZlWM&ab_channel=Black%26WhiteMusic",
      thumbnail_url : "https://i.ytimg.com/vi/TeB7BucZlWM/hqdefault_live.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcRgdUqWHSozu5bi0AcYQJBIgp2Q",
      nombre_video : "MUSICA MÁS ESCUCHADAS 2022 - Famosas canciones de música extranjera que la gente busca en 2022 #84",
      sentimientos : "",
      comentarios : "319",
      vistas : "3.1M",
      likes : "114230",
      tiempo_visualizacion : "10000"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
