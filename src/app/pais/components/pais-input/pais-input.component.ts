import { ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = ''
  @Output() onSearch: EventEmitter<string> = new EventEmitter()
  @Output() onDebounced: EventEmitter<string> = new EventEmitter()
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  debouncer: Subject<string> = new Subject()

  termino: string = ''

  constructor() { }
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe(valor => {
        this.onDebounced.emit(valor)
      })
  }

  buscar() {
    if (this.termino.length === 0) { return }
    this.onSearch.emit(this.termino)
    this.txtBuscar.nativeElement.value = ''
  }

  teclaPresionada() {
    this.termino = this.txtBuscar.nativeElement.value.trim()
    this.debouncer.next(this.termino)
  }

}
