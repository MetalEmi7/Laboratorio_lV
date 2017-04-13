import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Agregado
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AltaComponent } from './alta/alta.component';
import { BajaComponent } from './baja/baja.component';

const appRoutes: Routes = [
  { path: 'Logeo', component: LoginComponent },
  { path: 'Alta', component: AltaComponent },
  { path: 'Baja', component: BajaComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AltaComponent,
    BajaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
