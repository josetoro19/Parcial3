import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ruta } from 'src/app/models/ruta';

@Component({
  selector: 'app-modal-ruta',
  templateUrl: './modal-ruta.component.html',
  styleUrls: ['./modal-ruta.component.css']
})
export class ModalRutaComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  actualizar(ruta: Ruta) {
    this.activeModal.close(ruta);
  }

}
