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
  paisesSugeridos: Pais[] = []
  mostrarSugerencians: boolean = false


  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false
    this.mostrarSugerencians = false
    this.termino = termino
    this.fetchPaises()
    this.paisesSugeridos=[]
  }

  sugerencias(inputTxt: string) {
      this.hayError = false
      this.termino = inputTxt
      this.mostrarSugerencians = true
      this.paisService.buscarPais('name', inputTxt)
      .subscribe(resp => {
        this.paisesSugeridos = resp.splice(0,5)
      }, err => {
        this.paisesSugeridos = []
      })
     
  }

  fetchPaises() {
    this.paisService.buscarPais('name', this.termino)
      .subscribe(resp => {
        this.paises = [...resp]
      }, err => {
        this.hayError = true
        this.paises = []
      })
      this.mostrarSugerencians = false
  }
}
