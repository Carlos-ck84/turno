import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comercioDTO } from 'src/app/comercio/comercio';
import { ComercioService } from 'src/app/comercio/comercio.service';
import { servicioDTO } from 'src/app/servicio/servicio';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { TurnoService } from '../turno.service';
import { turnoCreacionDTO, turnoDTO } from './turno';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-turno',
  templateUrl: './listar-turno.component.html',
  styleUrls: ['./listar-turno.component.css'],
})
export class ListarTurnoComponent implements OnInit {
  constructor(
    private servicioService: ServicioService,
    private comercioService: ComercioService,
    private turnoService: TurnoService,
    private formBuilder: FormBuilder
  ) {}

  @ViewChild('paginator') paginator: MatPaginator;

  dataSource: MatTableDataSource<turnoDTO>;

  date1: any;
  date2: any;
  listaComercios: any;
  listaServicios: any;
  idServicio: number;
  form: FormGroup;
  modeloTurno: turnoDTO[];
  columnas = ['fechaTurno', 'horaInicio', 'horaFin', 'estado'];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      comercioSel: [null, Validators.required],
      servicioSel: [null, Validators.required],
      fechaInicio: [null, Validators.required],
      fechaFin: [null, Validators.required],
    });
    this.comercioService.listaComercios().subscribe((comercios: any) => {
      this.listaComercios = comercios;
    });
  }

  // ngAfterViewInit() {
  //   this.dataSource = new MatTableDataSource(this.modeloTurno);
  //   this.dataSource.paginator = this.paginator;
  // }

  get comercioSel() {
    return this.form.get('comercioSel');
  }

  cargarRegistrosServicios(id: number) {
    this.servicioService.listarServicios(id).subscribe((servicios) => {
      this.listaServicios = servicios;
    });
  }

  seleccionComercio() {
    this.cargarRegistrosServicios(this.comercioSel.value);
    this.modeloTurno = [];
    this.date1 = this.date2 = null;
  }

  get servicioSel() {
    return this.form.get('servicioSel');
  }

  cargarRegistrosTurnos(id: number) {
    this.turnoService.listarTurnos(id).subscribe((turnos) => {
      this.modeloTurno = turnos;
      this.dataSource = new MatTableDataSource(this.modeloTurno);
      this.dataSource.paginator = this.paginator;
    });
  }

  seleccionServicio() {
    this.cargarRegistrosTurnos(this.servicioSel.value);
    this.idServicio = this.servicioSel.value;
  }

  guardarTurnos(turno: turnoCreacionDTO) {
    turno.idServicio = this.idServicio;
    this.turnoService.crear(turno).subscribe(
      () => {
        this.cargarRegistrosTurnos(this.servicioSel.value);
      },
      (error) => console.log(error)
    );
  }

  generarTurno() {
    this.guardarTurnos(this.form.value);
  }
}
