import { Egreso } from './egreso/egreso.model';
import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicios } from './egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  //traemos la info del servicio
  constructor(
    private ingresoServicio:IngresoServicio,
    private egresoServicio:EgresoServicios
    ){
      //variable que traemos del servicio
      //y la guardamos en la variable que creamos acá
      this.ingresos = ingresoServicio.ingresos;
      this.egresos = egresoServicio.egresos;
    }

    //obtenemos la info del ingreso total
    getIngresoTotal(){
      //nicializo variable para guardar el ingreso total
      let ingresoTotal:number=0;
      this.ingresos.map(ingreso => {
        /* x cada ingreso dentro del array 'ingresos'
        sumamos el valor a la variable ingreso total
         */
        ingresoTotal += ingreso.valor;
      })
      return ingresoTotal;
    };

    //obtenemos la info del egreso total
    getEgresoTotal(){
      //nicializo variable para guardar el ingreso total
      let egresoTotal:number=0;
      this.egresos.map(egreso => {
        /* x cada ingreso dentro del array 'ingresos'
        sumamos el valor a la variable ingreso total
         */
        egresoTotal += egreso.valor;
      })
      return egresoTotal;
    };

    //metodo para obtener el porcentaje
    getPorcentajeTotal(){
      return this.getEgresoTotal()/this.getIngresoTotal();
    }

    //presupuesto total
    getPresupuestoTotal(){
      return this.getIngresoTotal() - this.getEgresoTotal();
    }
}
