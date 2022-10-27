import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

// Version 1 de exportacion PDF
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

// version 2 de exportacion a PDF
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';

// Store
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/metatube/store';
import * as SearchActions from "src/app/metatube/store/search/search.actions";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public searchVisible$ : Observable<boolean>;

  constructor(private store : Store<AppState>) {
    this.searchVisible$ = this.store.select(state => state.search.visible);
  }

  ngOnInit(): void {
  }

  // Opcion1 de exportacion de PDF

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();

  }

  // Opcion 2 de exportacion de PDF
  @ViewChild('invoice') invoiceElement!: ElementRef;

  public generatePDF(): void {

    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save('angular-invoice-pdf-demo.pdf');
    });
  }

}
