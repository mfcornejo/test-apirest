import { Component, OnInit } from '@angular/core';
import { NombreService } from '../../services/nombre.service';
import { User } from '../../interfaces/usuarios.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: []
})
export class UsuariosComponent{

  termino : string = ''
  usuarios: User[] = [];


constructor(private nombreService: NombreService){}
buscar(){
  console.log(this.termino);

  this.nombreService.buscarNombre(this.termino)
  .subscribe((usuarios) =>{
    console.log(usuarios);
    this.usuarios = usuarios;


  });


}

}
