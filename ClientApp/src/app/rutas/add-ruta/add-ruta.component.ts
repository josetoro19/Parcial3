import { Component, OnInit } from '@angular/core';
import { RutaService } from 'src/app/services/ruta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ruta } from 'src/app/models/ruta';

@Component({
  selector: 'app-add-ruta',
  templateUrl: './add-ruta.component.html',
  styleUrls: ['./add-ruta.component.css']
})
export class AddRutaComponent implements OnInit {

  constructor(private rutaService:RutaService,
    private formBuilder: FormBuilder) { }
    ruta:Ruta;
    registerForm: FormGroup;
    submitted = false;
  ngOnInit() {
    this.ruta = new Ruta();

    this.registerForm = this.formBuilder.group({
      id: [this.ruta.id, Validators.required],
      origen: [this.ruta.origen, Validators.required],
      destino: [this.ruta.destino, Validators.required],
      valor: [this.ruta.valor, [ Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get f(){ 
    return this.registerForm.controls;
  }

  create() {
    this.ruta = this.registerForm.value;

    this.rutaService.addRuta(this.ruta).subscribe();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.create();
  }


}
