import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core'
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Proyecto } from 'src/api';
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-layout-mini-sidebar',
  templateUrl: './layout-mini-sidebar.component.html',
  styleUrls: ['./layout-mini-sidebar.component.scss']
})
export class LayoutMiniSidebarComponent implements OnInit {

  @Output() itemClick: EventEmitter<any> = new EventEmitter()
  @Input() proyectos: Observable<Proyecto>;

  public loading: boolean = false

  constructor(private auth: AuthService,private router:Router) {
  }

  ngOnInit(): void {
  }

  onItemClick(proyecto) {
    this.itemClick.next(proyecto)
  }

  onFakeLoading() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 500)
  }

  onLogOut(){
    this.auth.LogOut();
    this.router.navigate(['/full/signin']);
  }

}
