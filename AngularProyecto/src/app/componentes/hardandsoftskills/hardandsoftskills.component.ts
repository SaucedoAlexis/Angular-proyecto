import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-hardandsoftskills',
  templateUrl: './hardandsoftskills.component.html',
  styleUrls: ['./hardandsoftskills.component.css']
})
export class HardandsoftskillsComponent implements OnInit {

  constructor(private datos:PortfolioService) { }
  hardAndSoftSkillsList:any;
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.hardAndSoftSkillsList=data.hardAndSoftSkills;
    })
  }

}
