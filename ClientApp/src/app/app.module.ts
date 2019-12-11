import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AddClienteComponent } from './clientes/add-cliente/add-cliente.component';
import { ListClienteComponent } from './clientes/list-cliente/list-cliente.component';
import { ListRutasComponent } from './rutas/list-rutas/list-rutas.component';
import { AddRutaComponent } from './rutas/add-ruta/add-ruta.component';
import { AddTiqueteComponent } from './tiquete/add-tiquete/add-tiquete.component';
import { ModalRutaComponent } from './modals/modal-ruta/modal-ruta.component';
import { ModalClienteComponent } from './modals/modal-cliente/modal-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AddClienteComponent,
    ListClienteComponent,
    ListRutasComponent,
    AddRutaComponent,
    AddTiqueteComponent,
    ModalRutaComponent,
    ModalClienteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      {path: 'addCliente', component:AddClienteComponent},
      {path: 'listClientes',component:ListClienteComponent},
      {path: 'addRuta', component:AddRutaComponent},
      {path: 'listRutas', component: ListRutasComponent},
      {path: 'addTiquete', component: AddTiqueteComponent}
    ])
  ],
  entryComponents: [ModalClienteComponent,
    ModalRutaComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
