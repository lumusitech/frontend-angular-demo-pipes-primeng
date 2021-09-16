import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Luciano';
  genero: string = 'masculino';

  InvitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Pedro', 'María', 'Juan', 'Luciano', 'Elías', 'Carlos'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarNombre(): void {
    this.nombre === 'Luciano'
      ? (this.nombre = 'María')
      : (this.nombre = 'Luciano');
    this.genero === 'masculino'
      ? (this.genero = 'femenino')
      : (this.genero = 'masculino');
  }

  borrarCliente():void{
    this.clientes.pop();
  }

  // keyValue Pipe
  persona = {
    nombre: 'Luciano',
    edad: '40',
    direccion: 'Buenos Aires, Argentina'
  };

  //Json Pipe
  heroes = [
    {nombre: 'Superman', vuela: true},
    {nombre: 'Robin', vuela: false},
    {nombre: 'Aquaman', vuela: false},
  ];

  //Async Pipe
  miObservable = interval(1000); // imprimirá 1, 2, 3, ...n

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("Ha llegado data de la promesa")
    },5000)
  });
}
