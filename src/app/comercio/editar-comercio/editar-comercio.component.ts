import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComercioService } from '../comercio.service';
import { comercioCreacionDTO, comercioDTO } from '../comercio';

@Component({
  selector: 'app-editar-comercio',
  templateUrl: './editar-comercio.component.html',
  styleUrls: ['./editar-comercio.component.css']
})
export class EditarComercioComponent implements OnInit {
  
  constructor(
    private router: Router,
    private comercioService: ComercioService,
    private activatedRoute: ActivatedRoute
  ) {}
  
    modelo: comercioDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.comercioService.comercioPorId(params.id)
      .subscribe(comercio => {
         this.modelo = comercio;
      }, () => this.router.navigate(['comercio/listar']))
    });
  }

  guardarCambios(comercio: comercioCreacionDTO) {   
    console.log("EL ID ES" + this.modelo.idComercio) ;
    this.comercioService.editar(this.modelo.idComercio, comercio)
    .subscribe(() => {
      this.router.navigate(['comercio/listar']);
    }, error => console.log(error))
  }

}
