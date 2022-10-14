import {Component, EventEmitter, OnInit, Output} from '@angular/core'

@Component({
  selector: 'metatube-header-mini',
  templateUrl: './header-mini.component.html',
  styleUrls: ['./header-mini.component.css']
})
export class HeaderMiniComponent implements OnInit {

  @Output() menuClick: EventEmitter<boolean> = new EventEmitter()
  @Output() itemClick: EventEmitter<any> = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  onSideBarToggle($event) {
    this.menuClick.next(true)
  }

  onItemClick(event) {
    this.itemClick.next(event)
  }
}
