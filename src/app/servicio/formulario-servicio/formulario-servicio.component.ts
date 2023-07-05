import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { servicioCreacionDTO } from '../servicio';
import { Time } from '@angular/common';

@Component({
  selector: 'app-formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styleUrls: ['./formulario-servicio.component.css'],
})
export class FormularioServicioComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;
  @Input()
  modelo: servicioCreacionDTO;

  @Output()
  onSubmit: EventEmitter<servicioCreacionDTO> =
    new EventEmitter<servicioCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomServicio: [
        '',
        { validators: [Validators.required, Validators.maxLength(50)] },
      ],
      idComercio: '',
      horaApertura: ['', { validators: [Validators.required] }],
      horaCierre: ['', { validators: [Validators.required] }],
      duracion: ['', { validators: [Validators.required] }],
    });
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
  guardarCambios() {
    this.onSubmit.emit(this.form.value);
  }

  validacionHora() {
    const ha: Time = this.form.get('horaApertura').value;
    const hc: Time = this.form.get('horaCierre').value;
    if (ha && hc) {
      if (hc < ha) {
        this.form.get('horaCierre').setErrors({ horaInvalida: true });
        alert('Hora debe ser mayor q la anterior');
      }
    }
  }
}
