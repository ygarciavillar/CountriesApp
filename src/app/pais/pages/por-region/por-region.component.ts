import { Component} from '@angular/core';
import { Pais } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  paises: Pais[] = []
  hayError: boolean = false
  regionActiva: string = ''
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']

  constructor(private paisService: PaisService) { }


  getClaseCSS(region: string):string{
    let style = 'btn mr-1 '
    style +=(region === this.regionActiva ? 'btn-primary' : 'btn-outline-primary')
    return  style
  }

  buscarPais(region: string){
    if(this.regionActiva === region) {return}
    this.regionActiva = region
    this.paises = [];
    this.fetchPaises(this.regionActiva)
  }

  fetchPaises(region: string) {
    this.hayError = false
    this.paisService.buscarPais('region', region)
      .subscribe(resp => {
        this.paises = [...resp]
      }, err => {
        this.hayError = true
        this.paises = []
      })
  }

}
