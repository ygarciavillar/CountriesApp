import { Component } from '@angular/core';
import { Pais } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = ''
  hayError: boolean = false;
  paises: Pais[] = []

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false
    this.termino = termino
    this.fetchPaises()
  }

  fetchPaises() {
    this.paisService.buscarPais('capital', this.termino)
      .subscribe(resp => {
        this.paises = [...resp]
      }, err => {
        this.hayError = true
        this.paises = []
      })
  }

}
