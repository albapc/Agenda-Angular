import { Component, OnInit } from '@angular/core';
import {InicioService} from '../../services/inicio.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private nombre: string;
  private apellidos: string;
  private edad: number;
  private dni: string;
  private cumpleanhos: Date;
  private colorFav: string;
  private sexo: string;
  private notas: string;
  indice: number;

  constructor(public inicioService: InicioService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.indice = parseInt(params.indice);
      if(this.indice < 0) {
        this.nombre = null;
        this.apellidos = null;
        this.edad = null;
        this.dni = null;
        this.cumpleanhos = new Date();
        this.colorFav = null;
        this.sexo = 'No especificado';
        this.notas = null;
      } else {
        this.nombre = this.inicioService.agenda[this.indice].getNombre();
        this.apellidos = this.inicioService.agenda[this.indice].getApellidos();
        this.edad = this.inicioService.agenda[this.indice].getEdad();
        this.dni = this.inicioService.agenda[this.indice].getDni();
        this.cumpleanhos = this.inicioService.agenda[this.indice].getCumpleanhos();
        this.colorFav = this.inicioService.agenda[this.indice].getColorFav();
        this.sexo = this.inicioService.agenda[this.indice].getSexo();
        this.notas = this.inicioService.agenda[this.indice].getNotas();
      }
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.indice === -1) {
      console.log('Agregar datos');
      this.inicioService.agregarPersona(this.nombre, this.apellidos, this.edad, this.dni, this.cumpleanhos, this.colorFav,
        this.sexo, this.notas);
    } else {
      console.log('Modificar datos');
      this.inicioService.actualizarPersona(this.indice, this.nombre, this.apellidos, this.edad, this.dni, this.cumpleanhos,
        this.colorFav, this.sexo, this.notas);
    }
    this.router.navigate(['']);
  }
  close() {
    this.router.navigate(['']);
  }
}
