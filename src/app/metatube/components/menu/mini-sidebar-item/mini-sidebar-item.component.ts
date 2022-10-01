import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-sidebar-item',
  templateUrl: './mini-sidebar-item.component.html',
  styleUrls: ['./mini-sidebar-item.component.scss']
})
export class MiniSidebarItemComponent implements OnInit {

  @Input() nombre: string;

  constructor() { }

  ngOnInit(): void {
  }

  public loading: boolean = false

  onFakeLoading() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 500)
  }

}
