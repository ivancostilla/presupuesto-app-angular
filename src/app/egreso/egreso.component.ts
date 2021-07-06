import { EgresoServicios } from './egreso.servicio';
import { Component, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[]=[];
  @Input() ingresoTotal:number;

  constructor(private egresoServicio:EgresoServicios) { }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
