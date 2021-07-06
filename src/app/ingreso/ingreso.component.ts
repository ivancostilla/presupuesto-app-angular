import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:Ingreso[]=[];

  //inyectamos el servicio
  constructor(private ingresoServicio:IngresoServicio) { }

  //inicializamos el arreglo de ingresos con el servicio de ingresos
  ngOnInit(): void {
    this.ingresos= this.ingresoServicio.ingresos
  }

  eliminarRegistro(ingreso: Ingreso){
    //obtenemos el parametro ingreso desde el html
    //y se lo pasamos al metodo eliminar que está en el servicio
    this.ingresoServicio.eliminar(ingreso)
  }
}
