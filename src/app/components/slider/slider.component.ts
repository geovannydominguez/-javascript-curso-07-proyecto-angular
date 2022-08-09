import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  // En este componente hijo capturo los atributos que vienen del componente padre.
  @Input() anchura: number = 0;
  @Input('etiquetas') captions: boolean = false;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;


  constructor() {
    this.autor = {
      nombre: "Víctor Robles",
      website: "victorroblesweb.es",
      youtube: "Victor Robles WEB"
    };
  }

  ngOnInit(): void {

    $("#logo").click(function (e: any) {
      e.preventDefault();

      $("header").css("background", "green")
        .css("height", "50px");
    });

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });

    // Lanzar evento
    this.conseguirAutor.emit(this.autor);
  }

  lanzar(event: any) {
    this.conseguirAutor.emit(this.autor);
  }

}
