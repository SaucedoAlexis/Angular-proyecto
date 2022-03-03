import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datos:PortfolioService) { }
    educacionList:any ;
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.educacionList=data.educacion;
    })
  }

}
