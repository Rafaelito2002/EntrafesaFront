import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngFor y otras directivas

@Component({
  selector: 'app-admin-crear-ruta',
  standalone: true,
  imports: [FormsModule, CommonModule], // Agrega FormsModule y CommonModule aquí
  templateUrl: './admin-crear-ruta.component.html',
  styleUrls: ['./admin-crear-ruta.component.scss']
})
export class AdminCrearRutaComponent {
  selectedOrigin: any;
  selectedDestination: any;
routes:any;
  // Lista de ejemplos de datos para opciones de origen y destino
  origins = ['Trujillo', 'Lima', 'Chimbote'];
  destinations = ['Ica', 'Huaraz', 'Trujillo'];

  listarRutas() {
    throw new Error('Method not implemented.');
  }

  editRoute(_t19: any) {
    throw new Error('Method not implemented.');
  }

  deleteRoute(_t19: any) {
    throw new Error('Method not implemented.');
  }

  openCreateRouteModal() {
    throw new Error('Method not implemented.');
  }
}


