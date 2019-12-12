import { Injectable } from '@angular/core';
import {Persona} from '../classes/persona';
import {element} from 'protractor';
import {MatTableDataSource} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  public agenda: Persona[] = [];

  constructor() {
    let p1 = new Persona('Pepe', 'Rodriguez Garcia', 45, '39567563P', new Date(1974, 8, 30), 'Azul',
      'Hombre', 'Empleado numero 1');

    this.agenda.push(p1);

    let p2 = new Persona('Maria', 'Gonzalez Pardo', 26, '38426763M', new Date(1993, 10, 15), 'Rosa',
      'Mujer', 'Empleada numero 2');

    this.agenda.push(p2);

    let p3 = new Persona('Alejandro', 'Perez Estevez', 38, '52567823A', new Date(1981, 9, 6), 'Negro',
      'Hombre', 'Empleado numero 3');

    this.agenda.push(p3);

  }

  public borrarPersona(i: number) {
    this.agenda.splice(i, 1);
  }
  public actualizarPersona(i: number, nombre, apellidos, edad, dni, cumpleanhos, colorFav, sexo, notas) {
    this.agenda[i].setNombre(nombre);
    this.agenda[i].setApellidos(apellidos);
    this.agenda[i].setEdad(edad);
    this.agenda[i].setDni(dni);
    this.agenda[i].setCumpleanhos(cumpleanhos);
    this.agenda[i].setColorFav(colorFav);
    this.agenda[i].setSexo(sexo);
    this.agenda[i].setNotas(notas);
  }
  public agregarPersona(nombre, apellidos, edad, dni, cumpleanhos, colorFav, sexo, notas) {
    let persona = new Persona(nombre, apellidos, edad, dni, cumpleanhos, colorFav, sexo, notas);
    this.agenda.push(persona);
  }

}
