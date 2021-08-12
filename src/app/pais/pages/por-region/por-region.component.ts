import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

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
  paises: Country[] = [];
 
  termino: string = "";
  
  
  constructor( private paisService: PaisService ) { }

  
  getClassCSS( region:string) {
    //Condicion Ternaria
    return (region == this.regionActiva)  ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion( region:string ) {
    if (this.regionActiva == region) {
      return;
    }
    this.regionActiva = region;
    this.termino = region;

    this.paisService.buscarRegion( this.termino )
    .subscribe( paises => {

      this.paises = paises
    })
    
  }

 
  

  

}
