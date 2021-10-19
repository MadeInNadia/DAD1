import { Component, OnInit } from '@angular/core';
import listaEmpleados from 'src/assets/json/empleados.json';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Empleados: any = listaEmpleados;

}
