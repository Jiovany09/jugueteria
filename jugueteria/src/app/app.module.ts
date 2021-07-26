import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    CatalogoComponent,
    ContactoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
