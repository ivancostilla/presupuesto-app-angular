import { Egreso } from "./egreso.model";

export class EgresoServicios{

  egresos:Egreso[]=[
    new Egreso('Renta Depto',900),
    new Egreso('Ropa',200),
  ];
    //eliminar 1 registro
    eliminar(egreso:Egreso){
      //obtenemos el indice del ingreso dentro del array
      const indice: number = this.egresos.indexOf(egreso);

      //eliminamos ese ingreso
      this.egresos.splice(indice,1);
    }
}
