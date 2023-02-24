import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UsuariosComponent
  ]
})
export class UsuariosModule { }
