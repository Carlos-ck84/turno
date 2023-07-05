import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comercioCreacionDTO } from '../comercio';

@Component({
  selector: 'app-formulario-comercio',
  templateUrl: './formulario-comercio.component.html',
  styleUrls: ['./formulario-comercio.component.css']
})
export class FormularioComercioComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder){}

  form: FormGroup;
  @Input()
  modelo: comercioCreacionDTO;

  @Output()
  onSubmit: EventEmitter<comercioCreacionDTO> = new EventEmitter<comercioCreacionDTO>();
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomComercio: ['', {validators : [Validators.required, Validators.maxLength(50)]}],
      aforoMaximo: ['', {validators : [Validators.required]}]
    });
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }
}
