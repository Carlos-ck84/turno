import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { servicioDTO } from '../servicio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComercioService } from 'src/app/comercio/comercio.service';
import { comercioDTO } from 'src/app/comercio/comercio';

@Component({
  selector: 'app-listar-servicio',
  templateUrl: './listar-servicio.component.html',
  styleUrls: ['./listar-servicio.component.css']
})
export class ListarServicioComponent implements OnInit{

  constructor(private servicioService: ServicioService, private comercioService: ComercioService,
    private formBuilder: FormBuilder) {}

  listaComercios: any;

  form: FormGroup;
  modeloServicio: servicioDTO[];
  //modeloComercio: comercioDTO[];
  columnas = ['idServicio', 'nomServicio','acciones'];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      comercioSel: [null,Validators.required]
        });
    this.cargarRegistrosComercios();
  }

  cargarRegistrosServicios(id: number) {
    this.servicioService.listarServicios(id).subscribe((servicios) => {
      this.modeloServicio = servicios;
    });
  }

  cargarRegistrosComercios() {
    this.comercioService.listaComercios().subscribe((comercios:any) => {
      this.listaComercios = comercios;
    });
  }

  get comercioSel() {
    return this.form.get('comercioSel');
  }

  seleccionComercio()
  {
    this.cargarRegistrosServicios(this.comercioSel.value);
  }

  borrar(id: number) {
    this.servicioService.borrar(id).subscribe(
      () => {
        this.cargarRegistrosServicios(this.comercioSel.value);
      },
      (error) => console.error(error)
    );
  }
}
