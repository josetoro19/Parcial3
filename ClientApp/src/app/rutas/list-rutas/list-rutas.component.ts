import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RutaService } from 'src/app/services/ruta.service';
import { Ruta } from 'src/app/models/ruta';

@Component({
  selector: 'app-list-rutas',
  templateUrl: './list-rutas.component.html',
  styleUrls: ['./list-rutas.component.css']
})
export class ListRutasComponent implements OnInit {
  
  @Output() seleccionado = new EventEmitter<Ruta>();
  constructor(private ruraService:RutaService) { }
  rutas: Ruta[];
  filterRuta:'';
  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.ruraService.getAll().subscribe(result => {
      this.rutas=result;});
  }
  seleccionar(ruta: Ruta) {
    this.seleccionado.emit(ruta);
  }

  
}
