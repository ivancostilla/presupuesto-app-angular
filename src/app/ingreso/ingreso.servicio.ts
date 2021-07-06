import { Ingreso } from "./ingreso.model";

export class IngresoServicio{

  //inicializamos una variable con el objeto Ingreso:
  ingresos:Ingreso[]=[
    //acá usamos el model.ts:
    new Ingreso('Salario',4000),
    new Ingreso('Venta de Coche', 4500)
  ];
}
