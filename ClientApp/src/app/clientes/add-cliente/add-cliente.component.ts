import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private clienteService:ClienteService) { }
  cliente:Cliente;
  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.cliente = new Cliente();

    this.registerForm = this.formBuilder.group({
      identificacion: [this.cliente.identificacion, Validators.required],
      nombre: [this.cliente.nombre, Validators.required],
      telefono: [this.cliente.telefono, [ Validators.required, Validators.pattern("^[0-9]*$")]],
      email: [this.cliente.email, Validators.required]
    });
  }

  get f(){ 
    return this.registerForm.controls;
  }

  create() {
    this.cliente = this.registerForm.value;

    this.clienteService.addCliente(this.cliente).subscribe();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.create();
  }
}
