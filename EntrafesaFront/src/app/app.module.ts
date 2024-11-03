import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { MenubarComponent } from './componentes/menubar/menubar.component';
import { ItinerarioComponent } from './componentes/itinerario/itinerario.component';
import { FormsModule } from '@angular/forms'; 
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; 

@NgModule({ declarations: [
        AppComponent,
        NavComponent,
        MenubarComponent,
        ItinerarioComponent
    ], // No necesitas declarar servicios aquí si tienen providedIn: 'root'
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
