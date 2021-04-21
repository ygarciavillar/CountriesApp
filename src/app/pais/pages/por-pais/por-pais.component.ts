import { Component, ElementRef, ViewChild } from '@angular/core';
import { Pais } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})

export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];


  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false
    this.termino = termino
    this.fetchPaises()
  }

  sugerencias(event: string) {
      this.hayError = false
      console.log(event)
      //TODO crar sugerencias
  }

  fetchPaises() {
    this.paisService.buscarPais('name', this.termino)
      .subscribe(resp => {
        this.paises = [...resp]
      }, err => {
        this.hayError = true
        this.paises = []
      })
  }


}
