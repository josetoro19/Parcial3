import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
  clientes: Cliente[];
  filterCliente= '';
  @Output() seleccionado = new EventEmitter<Cliente>();
  constructor(private clienteService:ClienteService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.clienteService.getAll().subscribe(result => {
      this.clientes=result;});
  }
  seleccionar(cliente: Cliente) {
    this.seleccionado.emit(cliente);
  }

}
