import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FlexLayoutModule} from '@angular/flex-layout'

import {
  AddModule,
  CaretDownModule,
  HomeModule,
  SearchModule,
  AccountModule,
  ChatModule,
  NotificationModule as NotificationIconModule,
  CloudSatelliteModule,
  ApiModule,
  ApertureModule,
  UserModule,
  ToolsModule,
  ApplicationModule,
  HelpModule,
  ArrowUpModule,
  ArrowDownModule,
  OverflowMenuHorizontalModule,
  OverflowMenuVerticalModule,
  CloudDataOpsModule,
  VirtualPrivateCloudAltModule,
  CheckmarkOutlineModule,
  CaretRightModule,
  CaretLeftModule,
  ArrowRightModule,
  ArrowLeftModule,
  RenewModule,
  AlarmModule,
  MinimizeModule,
  CloudDownloadModule,
  AnalyticsModule,
  ActivityModule,
  DashboardModule,
  TaskModule,
  CatalogModule,
  DocumentModule,
  EmailModule,
  SendAltModule,
  SendModule,
  DashboardReferenceModule,
  UserAdminModule,
  UserAvatarModule,
  FolderModule,
  ImageSearchModule,
  ErrorModule,
  PhraseSentimentModule,
  TableSplitModule,
  ChartColumnModule,
  MagicWandModule,
  TextTrackingModule,
  TextCreationModule,
  TrashCanModule,
  MenuModule,
  RadioButtonModule,
  RadioButtonCheckedModule,
  SettingsAdjustModule,
  SettingsModule,
  CheckboxCheckedModule,
  CloudAppModule,
  BullhornModule,
  BuildingInsights_1Module,
  TagModule as TagModuleIcon,
  TimeModule,
  ChevronDownModule,
  ChevronUpModule,
  DraggableModule,
  ArchiveModule,
  MaximizeModule,
  ImageModule,
  StarModule,
  FolderSharedModule,
  RecentlyViewedModule,
  HashtagModule,
  DownloadModule,
  ShareModule,
  MoveModule,
  TableOfContentsModule,
  UploadModule,
  PackageModule,
  ChevronLeftModule,
  ChevronRightModule,
  AttachmentModule,
  FlagModule,
  FlagFilledModule,
  TextBoldModule,
  TextItalicModule,
  TextUnderlineModule,
  PrinterModule,
  OpenPanelFilledLeftModule,
  OpenPanelLeftModule,
  LockedModule,
  InformationModule,
  PhoneModule,
  EditModule,
  SubtractModule,
  MoneyModule,
  FaceActivatedModule,
  PurchaseModule,
  CalendarModule,
  PasswordModule,
  LocationModule,
  HourglassModule,
  InProgressModule,
  HearingModule,
  FavoriteModule,
  PinModule,
  PortfolioModule,
  IndustryModule,
  ExitModule,
  CloseModule,
  ViewModule,
  CheckmarkModule,
  CheckmarkFilledModule,
  AppsModule,
  WatsonHealthContourFindingModule, SaveModule, WatsonHealth_3DCursorAltModule, OpenPanelRightModule, DocumentAddModule, DocumentExportModule,
} from "@carbon/icons-angular"

import {
  GridModule,
  ListModule,
  TabsModule,
  TilesModule,
  InputModule,
  ButtonModule,
  TagModule,
  BreadcrumbModule,
  CheckboxModule,
  ComboBoxModule,
  AccordionModule,
  TableModule,
  ToggleModule,
  DatePickerModule,
  SearchModule as SearchModuleComponent,
  ContentSwitcherModule,
  SkeletonModule,
  DialogModule,
  LinkModule,
  NotificationModule,
  RadioModule,
  PaginationModule,
  SelectModule,
  SliderModule,
  NumberModule,
  FileUploaderModule, ProgressIndicatorModule, ModalModule,
} from 'carbon-components-angular'

const CarbonModules = [
  GridModule,
  ListModule,
  TabsModule,
  TilesModule,
  InputModule,
  ButtonModule,
  TagModule,
  BreadcrumbModule,
  CheckboxModule,
  ComboBoxModule,
  AccordionModule,
  TableModule,
  ToggleModule,
  DatePickerModule,
  SearchModuleComponent,
  ContentSwitcherModule,
  SkeletonModule,
  DialogModule,
  MaximizeModule,
  LinkModule,
  NotificationModule,
  RadioModule,
  PaginationModule,
  SelectModule,
  SliderModule,
  NumberModule,
  FileUploaderModule,
  ModalModule,
]

const CarbonIconModules = [
  CaretDownModule,
  AddModule,
  HomeModule,
  SearchModule,
  AccountModule,
  ChatModule,
  NotificationIconModule,
  CloudSatelliteModule,
  ApiModule,
  ApertureModule,
  UserModule,
  ToolsModule,
  ApplicationModule,
  HelpModule,
  ArrowUpModule,
  ArrowDownModule,
  OverflowMenuHorizontalModule,
  OverflowMenuVerticalModule,
  CloudDataOpsModule,
  VirtualPrivateCloudAltModule,
  CheckmarkOutlineModule,
  CaretRightModule,
  CaretLeftModule,
  ArrowRightModule,
  ArrowLeftModule,
  RenewModule,
  AlarmModule,
  MinimizeModule,
  CloudDownloadModule,
  AnalyticsModule,
  ActivityModule,
  DashboardModule,
  TaskModule,
  CatalogModule,
  DocumentModule,
  DocumentAddModule,
  DocumentExportModule,
  EmailModule,
  SendAltModule,
  SendModule,
  DashboardReferenceModule,
  UserAdminModule,
  UserAvatarModule,
  FolderModule,
  ImageSearchModule,
  ErrorModule,
  PhraseSentimentModule,
  TableSplitModule,
  ChartColumnModule,
  MagicWandModule,
  TextTrackingModule,
  TextCreationModule,
  TrashCanModule,
  MenuModule,
  RadioButtonModule,
  RadioButtonCheckedModule,
  SettingsAdjustModule,
  SettingsModule,
  CheckboxCheckedModule,
  CloudAppModule,
  BullhornModule,
  BuildingInsights_1Module,
  TagModuleIcon,
  TimeModule,
  ChevronDownModule,
  ChevronUpModule,
  DraggableModule,
  ArchiveModule,
  ImageModule,
  StarModule,
  FolderSharedModule,
  RecentlyViewedModule,
  HashtagModule,
  DownloadModule,
  ShareModule,
  MoveModule,
  TableOfContentsModule,
  UploadModule,
  PackageModule,
  ChevronLeftModule,
  ChevronRightModule,
  AttachmentModule,
  FlagModule,
  FlagFilledModule,
  TextBoldModule,
  TextItalicModule,
  TextUnderlineModule,
  PrinterModule,
  OpenPanelFilledLeftModule,
  OpenPanelLeftModule,
  LockedModule,
  InformationModule,
  PhoneModule,
  EditModule,
  SubtractModule,
  MoneyModule,
  FaceActivatedModule,
  PurchaseModule,
  CalendarModule,
  PasswordModule,
  LocationModule,
  HourglassModule,
  InProgressModule,
  HearingModule,
  FavoriteModule,
  PinModule,
  PortfolioModule,
  IndustryModule,
  ExitModule,
  CheckmarkModule,
  CheckmarkFilledModule,
  ViewModule,
  AppsModule,
  CloseModule,
  SaveModule,
  ProgressIndicatorModule,
  WatsonHealth_3DCursorAltModule,
  OpenPanelRightModule,
]



import { NgScrollbarModule } from 'ngx-scrollbar'
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { ReactiveFormsModule } from "@angular/forms"

import { IbmIconComponent } from "./components/ibm-icon/ibm-icon.component";
import { AppSidenavComponent } from "./components/app-sidenav/app-sidenav/app-sidenav.component";
import { AppSidenavContainerComponent } from "./components/app-sidenav/app-sidenav-container/app-sidenav-container.component";
import { AppLogoComponent } from "./components/app-logo/app-logo.component";

import {ResizableModule} from 'angular-resizable-element';

const MainModules = [
  //RouterModule,
  FlexLayoutModule,
  ResizableModule,
  //BemModule,
  NgbDropdownModule,
  NgbTooltipModule,
  //DragDropModule,
  //A11yModule,
  ReactiveFormsModule,
  //MatDialogModule,
]

const Components = [
  IbmIconComponent,
  AppSidenavComponent,
  AppSidenavContainerComponent,
  AppLogoComponent
]

@NgModule({
  imports: [
    CommonModule,
    ...MainModules,
    ...CarbonIconModules,
    ...CarbonModules,
    NgScrollbarModule.withConfig({
      visibility: 'hover',
    }),
  ],
  declarations: [
    ...Components
  ],
  exports: [
    ...MainModules,
    ...CarbonIconModules,
    ...CarbonModules,
    ...Components,
    NgScrollbarModule
  ]
})
export class SharedModule {
  constructor() {

  }
}
