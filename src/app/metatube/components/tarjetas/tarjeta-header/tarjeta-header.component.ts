import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-header',
  templateUrl: './tarjeta-header.component.html',
  styleUrls: ['./tarjeta-header.component.scss']
})
export class TarjetaHeaderComponent implements OnInit {

  @Input() titulo:string;
  @Input() subtitulo:string;

  constructor() { }

  ngOnInit(): void {
  }

}
