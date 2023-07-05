import { Component, OnInit ,ViewChild} from '@angular/core';
import { ComercioService } from '../comercio.service';
import { FormGroup } from '@angular/forms';
import { comercioDTO } from 'src/app/comercio/comercio';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-listar-comercio',
  templateUrl: './listar-comercio.component.html',
  styleUrls: ['./listar-comercio.component.css'],
})
export class ListarComercioComponent implements OnInit {
  constructor(private comercioService: ComercioService) {}

  @ViewChild('table')
  table: MatTable<any>;

  form: FormGroup;
  modelo: comercioDTO[];
  columnas = ['idComercio', 'nomComercio', 'aforoMaximo', 'acciones'];

  ngOnInit(): void {
    this.cargarRegistros();
  }

  cargarRegistros() {
    this.comercioService.listaComercios().subscribe((comercios) => {
      this.modelo = comercios;
    });
  }

  borrar(id: number) {
    this.comercioService.borrar(id).subscribe(
      () => {
        this.cargarRegistros();
      },
      (error) => console.error(error)
    );
  }
}
