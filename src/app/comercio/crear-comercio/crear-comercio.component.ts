import { Component } from '@angular/core';
import { comercioCreacionDTO } from '../comercio';
import { Router } from '@angular/router';
import { ComercioService } from '../comercio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-comercio',
  templateUrl: './crear-comercio.component.html',
  styleUrls: ['./crear-comercio.component.css']
})
export class CrearComercioComponent {
  constructor(private router: Router, private comercioService: ComercioService) {}

  guardarCambios(comercio: comercioCreacionDTO) {
    this.comercioService.crear(comercio).subscribe(
      (respuesta) => {
        Swal.fire({
          title: '¡Éxito!',
          text: 'Se ha completado la operación correctamente',
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['comercio/listar']);
          }
        });
        
      },
      (error) => console.log(error)
    );
  }
}
