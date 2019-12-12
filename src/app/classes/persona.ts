export class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanhos: Date;
  colorFav: string;
  sexo: string;
  notas: string;

  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanhos: Date, colorFav: string, sexo: string, notas: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanhos = cumpleanhos;
    this.colorFav = colorFav;
    this.sexo = sexo;
    this.notas = notas;

  }
  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nombre: string) {
    this.nombre = nombre;
}
  public getApellidos(): string {
    return this.apellidos;
  }
  public setApellidos(apellidos: string) {
    this.apellidos = apellidos;
  }
  public getDni(): string {
    return this.dni;
  }
  public setDni(dni: string) {
    this.dni = dni;
  }
  public getEdad(): number {
    return  this.edad;
  }
  public setEdad(edad: number) {
    this.edad = edad;
  }
  public getCumpleanhos(): Date {
    return this.cumpleanhos;
  }
  public setCumpleanhos(cumpleanhos: Date) {
    this.cumpleanhos = cumpleanhos;
  }
  public getColorFav(): string {
    return this.colorFav;
  }
  public setColorFav(colorFav: string) {
    this.colorFav = colorFav;
  }
  public getSexo(): string {
    return this.sexo;
  }
  public setSexo(sexo: string) {
    this.sexo = sexo;
  }
  public getNotas(): string {
    return this.notas;
  }
  public setNotas(notas: string) {
    this.notas = notas;
  }
}
