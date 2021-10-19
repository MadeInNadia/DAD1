import { Component, ViewEncapsulation } from '@angular/core';
import listaEmpleados from 'src/assets/json/empleados.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ProyectoAngular';
  Empleados: any = listaEmpleados;
}
