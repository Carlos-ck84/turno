import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { servicioCreacionDTO, servicioDTO } from '../servicio';

@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.css'],
})
export class EditarServicioComponent {
  constructor(
    private router: Router,
    private servicioService: ServicioService,
    private activatedRoute: ActivatedRoute
  ) {}

  modelo: servicioDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.servicioService.servicioPorId(params.id).subscribe(
        (servicio) => {
          this.modelo = servicio;
        },
        () => this.router.navigate(['servicio/listar'])
      );
    });
  }

  guardarCambios(servicio: servicioCreacionDTO) {        
    this.servicioService.editar(this.modelo.idServicio, servicio).subscribe(
      () => {
        this.router.navigate(['servicio/listar']);
      },
      (error) => console.log(error)
    );
  }
}
