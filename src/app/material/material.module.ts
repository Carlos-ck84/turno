import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatNativeDateModule} from '@angular/material/core'
import {MatTableModule} from '@angular/material/table'
import {MatSelectModule} from '@angular/material/select'
import {MatPaginatorModule} from '@angular/material/paginator'


@NgModule({
  declarations: [],
  exports:[
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
