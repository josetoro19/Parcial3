import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiqueteRequest } from 'src/app/models/tiquete-request';
import { TiqueteService } from 'src/app/services/tiquete.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRutaComponent } from 'src/app/modals/modal-ruta/modal-ruta.component';
import { Ruta } from 'src/app/models/ruta';
import { Cliente } from 'src/app/models/cliente';
import { ModalClienteComponent } from 'src/app/modals/modal-cliente/modal-cliente.component';

@Component({
  selector: 'app-add-tiquete',
  templateUrl: './add-tiquete.component.html',
  styleUrls: ['./add-tiquete.component.css']
})
export class AddTiqueteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private tiqueteService:TiqueteService,
    private modalService: NgbModal) { }

  registerForm : FormGroup;
  submitted = false;
  tiquete : TiqueteRequest;
  ngOnInit() {
    this.tiquete = new TiqueteRequest();

    this.registerForm = this.formBuilder.group({
      id: [this.tiquete.id, Validators.required],
      rutaId: [this.tiquete.rutaId, Validators.required],
      identificacionCliente: [this.tiquete.identificacionCliente, Validators.required],
      valorR: [''],
      nombreCliente: [''],
      cantidad: [this.tiquete.cantidad, Validators.required]
    });
  }

  get f(){ 
    return this.registerForm.controls;
  }

  create() {
    this.tiquete = this.registerForm.value;

    this.tiqueteService.addTiquete(this.tiquete).subscribe();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.create();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  openModalRuta(){
    this.modalService.open(ModalRutaComponent).result.then((ruta)=> this.actualizar(ruta));
  }
  actualizar(ruta: Ruta) {
        
    this.registerForm.controls['rutaId'].setValue(ruta.id);
    this.registerForm.controls['valorR'].setValue(ruta.valor);
    
  }

  openModalCliente(){
    this.modalService.open(ModalClienteComponent).result.then((ruta)=> this.actualizarCiente(ruta));
  }
  actualizarCiente(cliente: Cliente) {
        
    this.registerForm.controls['identificacionCliente'].setValue(cliente.identificacion);
    this.registerForm.controls['nombreCliente'].setValue(cliente.nombre);
    
  }

}
