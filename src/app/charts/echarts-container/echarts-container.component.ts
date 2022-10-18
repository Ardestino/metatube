import {
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ContentChild
} from '@angular/core'
// TODO: Arreglar servicio de temas para graficas
//import {SettingsService} from "../../../services/settings.service"
import {EchartsComponent} from "../echarts/echarts.component"
import {Subscription} from "rxjs"

@Component({
  selector: 'youpez-echarts-container',
  templateUrl: './echarts-container.component.html',
  styleUrls: ['./echarts-container.component.scss']
})
export class EchartsContainerComponent implements OnInit, OnDestroy {

  @ContentChild(EchartsComponent, {static: true}) echarts: EchartsComponent
  public settingsSub: Subscription

  //constructor(private settingsService: SettingsService) {
  constructor() {

  }

  ngOnInit(): void {
    // this.settingsSub = this.settingsService
    //   .themeChanged
    //   .subscribe(() => {
    //     this.refreshChart()
    //   })
  }

  ngOnDestroy() {
    // this.settingsSub.unsubscribe()
  }

  refreshChart() {
    // this.echarts.refreshChart()
  }

}
