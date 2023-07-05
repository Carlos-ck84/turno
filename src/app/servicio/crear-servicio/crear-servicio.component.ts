import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { servicioCreacionDTO, servicioDTO } from '../servicio';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearServicioComponent implements OnInit{
  constructor(private router: Router, private servicioService: ServicioService
    ,private activatedRoute: ActivatedRoute) {}
  
  modelo: servicioDTO;
  idComercio : number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idComercio = params.id;
    });
  }

  guardarCambios(servicio: servicioCreacionDTO) {
    servicio.idComercio = this.idComercio;
    this.servicioService.crear(servicio).subscribe(
      () => {
        this.router.navigate(['servicio/listar']);
      },
      (error) => console.log(error)
    );
  }
}


