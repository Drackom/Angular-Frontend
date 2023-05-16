import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';
import { PortfolioService } from './servicios/portfolio.service';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PortadaComponent,
    InformacionComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
