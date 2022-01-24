import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private _gifsServices: GifsService) {}

  get historial() {
    return this._gifsServices.historial;
  }

  buscar(termino: string) {
    this._gifsServices.buscarGifs(termino);
  }
}
