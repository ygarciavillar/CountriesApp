import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap, tap} from 'rxjs/operators'
import { Pais } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {


  pais!:Pais  ;

  constructor(
    private activatedRouter: ActivatedRoute, 
    private paisService: PaisService) { }

  ngOnInit(): void {

     this.activatedRouter.params
     .pipe(
        switchMap( (param) => this.paisService.buscarCode(param.id)),
        tap(console.log)
     )
     .subscribe( pais => this.pais = pais)
    
    /* Esto hace lo mismo q arriba pero sin rxjs operador switchMap*/
    // this.activatedRouter.params
    // .subscribe(({id}) => {
    //   this.paisService.buscarCode(id)
    //    .subscribe( pais => console.log(pais))
    // })

  }

  buscarPais(){
  //  this.pais = this.paisService.buscarCode('co')
  }

}
