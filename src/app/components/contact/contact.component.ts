import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  public widthSlider: number = 0;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;


  constructor() {
    this.captions = true;
  }

  ngOnInit(): void {

  }

  cargarSlider() {
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider() {
    this.anchuraToSlider = false;
  }

  getAutor(event: any) {
    this.autor = event;
  }

}
