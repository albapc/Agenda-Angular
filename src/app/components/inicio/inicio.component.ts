import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InicioService} from '../../services/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public inicioService: InicioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  public borrarPersona(i: number) {
    console.log('Borrar persona', i);
    this.inicioService.borrarPersona(i);
  }
  public modificarPersona(i: number) {
    console.log('Modificar persona', i);
    this.router.navigate(['/perfil'], {queryParams: {'indice': i} });
  }
  public agregarPersona() {
    console.log('Agregar persona');
    this.router.navigate(['/perfil'], {queryParams: {'indice': -1} });
  }

}
