import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[]  = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva:string = "";
  
  
  constructor() { }

  
  getClassCSS( region:string) {
    //Condicion Ternaria
    return (region == this.regionActiva)  ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion( region:string ) {
    this.regionActiva = region;

    //TODO: hacer el llamado al servicio
  }

  

}
