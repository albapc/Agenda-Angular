import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
