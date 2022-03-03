import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-imagen-encabezado',
  templateUrl: './imagen-encabezado.component.html',
  styleUrls: ['./imagen-encabezado.component.css']
})
export class ImagenEncabezadoComponent implements OnInit {

  constructor(private datos:PortfolioService) { }
  encabezado:any;
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.encabezado=data;
    })
  }

}
