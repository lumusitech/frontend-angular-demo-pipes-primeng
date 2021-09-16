import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  enMayusculas: boolean = false;
  criterio: string = 'vuela';
  // <th>Code</th>
  // <th>Name</th>
  // <th>Category</th>
  // <th>Quantity</th>
  heroes: Heroe[] = [
    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.verde },
    { nombre: 'Daredevil', vuela: false, color: Color.rojo },
    { nombre: 'Linterna verde', vuela: true, color: Color.verde },
   
  ];

  onClick(): void {
    this.enMayusculas = !this.enMayusculas;
  }

  ordenar(criterio: string):void{
    this.criterio = criterio;
  }
}
