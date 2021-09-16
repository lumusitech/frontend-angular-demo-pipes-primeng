import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = "LuCiANo";
  nombreUpper: string = "LuCiANo";
  nombreTitle: string = "LuCiANo";

  fecha: Date = new Date();

}
