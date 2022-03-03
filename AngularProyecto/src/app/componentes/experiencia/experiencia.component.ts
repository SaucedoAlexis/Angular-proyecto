import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private datos:PortfolioService) { }
    experienciaList:any;

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
    this.experienciaList=data.experiencia;
  })}
  
  

}
