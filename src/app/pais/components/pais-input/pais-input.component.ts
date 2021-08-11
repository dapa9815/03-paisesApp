import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject, } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
    

    termino:string = '';
    /*  Al estar con un OutPut funciona o se puede ver como un tipo de variable en la parte de la vista

    */
    @Output() onEnter: EventEmitter<string> = new EventEmitter();
    @Output() onDebounce: EventEmitter<string> = new EventEmitter();

    

    deBouncer : Subject<string> = new Subject();



    ngOnInit(): void {
      this.deBouncer
        .pipe(
          debounceTime(300)
        )
        .subscribe( valor => {
        this.onDebounce.emit( valor )
      } )
    }

    buscar() {
      this.onEnter.emit( this.termino ); 
    }

    teclaPresionada() {
      this.deBouncer.next( this.termino )
    }
  

}

