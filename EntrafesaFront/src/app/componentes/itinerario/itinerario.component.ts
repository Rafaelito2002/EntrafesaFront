import { Component, OnInit } from '@angular/core';
import { EntrafesaService } from '../../services/itinerario.service';
import { itinerario } from '../../models/itinerario';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss']
})
export class ItinerarioComponent implements OnInit {
  itinerarios: itinerario[] = []; // Array para guardar los resultados
  origen: string[] = [];          // Lista de orígenes
  destino: string[] = [];         // Lista de destinos
  fechaViajeISO: string = '';     // Formato ISO para la fecha seleccionada

  origenSeleccionado: string = '';  // Para almacenar el origen seleccionado
  destinoSeleccionado: string = ''; // Para almacenar el destino seleccionado
  currentStep: number = 1;         // Control de pasos
  itinerarioElegido: itinerario | null = null; // Almacena el itinerario elegido

  constructor(private entrafesaService: EntrafesaService) {} // Inyecta el servicio

  ngOnInit(): void {
    this.obtenerOrigen();
    this.obtenerDestino();
  }

  obtenerOrigen(): void {
    this.entrafesaService.getOrigen().subscribe(
      (data) => this.origen = data,
      (error) => console.error('Error al obtener orígenes: ', error)
    );
  }

  obtenerDestino(): void {
    this.entrafesaService.getDestino().subscribe(
      (data) => this.destino = data,
      (error) => console.error('Error al obtener destinos: ', error)
    );
  }

  buscarItinerarios(): void {
    // Formatear la fecha a formato YYYY-MM-DD
    const fechaFormateada = new Date(this.fechaViajeISO).toISOString().split('T')[0];
    console.log('Fecha formateada:', fechaFormateada);

    this.entrafesaService.buscarItinerario(this.origenSeleccionado, this.destinoSeleccionado, fechaFormateada)
      .subscribe(
        (data) => {
          this.itinerarios = data;
          console.log('Itinerarios encontrados:', this.itinerarios);
          if (this.itinerarios.length > 0) {
            this.irAdelante(); // Avanzamos al siguiente paso si hay resultados
          }
        },
        (error) => console.error('Error al buscar itinerarios: ', error)
      );
  }

  irAdelante(): void {
    this.currentStep++; // Avanza al siguiente paso
  }

  elegirItinerario(itinerario: itinerario): void {
    this.itinerarioElegido = itinerario;
    // Aquí podrías avanzar al siguiente paso o mostrar un mensaje
    console.log('Itinerario elegido:', itinerario);
  }






















  /*buscar(): void {
    if (this.origen && this.destino && this.fechaViaje) {
      // Llamada al servicio para buscar itinerarios
      this.entrafesaService
        .buscarItinerario(this.origen, this.destino, this.fechaViaje)
        .subscribe(
          (data: itinerario[]) => {
            this.itinerarios = data; // Asignar los datos al array
          },
          (error) => {
            console.error('Error al buscar itinerarios:', error); // Manejo de errores
          }
        );
    } else {
      console.warn('Todos los campos del formulario son obligatorios.');
    }
  }*/
}
