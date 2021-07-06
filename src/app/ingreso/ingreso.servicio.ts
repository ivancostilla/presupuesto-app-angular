import { Ingreso } from "./ingreso.model";

export class IngresoServicio{

  //inicializamos una variable con el objeto Ingreso:
  ingresos:Ingreso[]=[
    //acá usamos el model.ts:
    new Ingreso('Salario',4000),
    new Ingreso('Venta de Coche',500)
  ];

  //eliminar 1 registro
  eliminar(ingreso:Ingreso){
    //obtenemos el indice del ingreso dentro del array
    const indice: number = this.ingresos.indexOf(ingreso);

    //eliminamos ese ingreso
    this.ingresos.splice(indice,1);
  }
}
