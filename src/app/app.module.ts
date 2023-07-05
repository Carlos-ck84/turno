import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { FormularioComercioComponent } from './comercio/formulario-comercio/formulario-comercio.component';
import { CrearComercioComponent } from './comercio/crear-comercio/crear-comercio.component';
import { EditarComercioComponent } from './comercio/editar-comercio/editar-comercio.component';
import { ListarComercioComponent } from './comercio/listar-comercio/listar-comercio.component';
import {MaterialModule} from './material/material.module'
import {HttpClientModule} from '@angular/common/http'
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { CrearServicioComponent } from './servicio/crear-servicio/crear-servicio.component';
import { EditarServicioComponent } from './servicio/editar-servicio/editar-servicio.component';
import { ListarServicioComponent } from './servicio/listar-servicio/listar-servicio.component';
import { FormularioServicioComponent } from './servicio/formulario-servicio/formulario-servicio.component'
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ListarTurnoComponent } from './turno/listar-turno/listar-turno.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormularioComercioComponent,
    CrearComercioComponent,
    EditarComercioComponent,
    ListarComercioComponent,
    CrearServicioComponent,
    EditarServicioComponent,
    ListarServicioComponent,
    FormularioServicioComponent,
    ListarTurnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    NgxMaterialTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
