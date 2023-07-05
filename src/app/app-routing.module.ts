import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComercioComponent } from './comercio/crear-comercio/crear-comercio.component';
import { ListarComercioComponent } from './comercio/listar-comercio/listar-comercio.component';
import { EditarComercioComponent } from './comercio/editar-comercio/editar-comercio.component';
import { AppComponent } from './app.component';
import { EditarServicioComponent } from './servicio/editar-servicio/editar-servicio.component';
import { ListarServicioComponent } from './servicio/listar-servicio/listar-servicio.component';
import { CrearServicioComponent } from './servicio/crear-servicio/crear-servicio.component';
import { ListarTurnoComponent } from './turno/listar-turno/listar-turno.component';

const routes: Routes = [
  {path:'comercio/crear', component: CrearComercioComponent},
  {path:'comercio/listar', component: ListarComercioComponent},
  {path:'comercio/editar/:id', component: EditarComercioComponent},
  {path:'servicio/crear/:id', component: CrearServicioComponent},
  {path:'servicio/listar', component: ListarServicioComponent},
  {path:'servicio/editar/:id', component: EditarServicioComponent},
  {path:'turno/listar', component: ListarTurnoComponent},
  {path:'*.*', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
