import { Component, OnInit } from '@angular/core';
import { EntrafesaService } from '../../services/itinerario.service';  // Verifica la ruta de importación
import { itinerario } from '../../models/itinerario';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss']
})
export class ItinerarioComponent implements OnInit {
  // Variables del formulario
  itinerarios: itinerario[] = []; // Array para guardar los resultados
  origen: string = ''; 
  destino: string = ''; 
  fechaViaje: Date = new Date(); // Inicializa con la fecha actual

  constructor(private entrafesaService: EntrafesaService) {} // Inyecta el servicio

  ngOnInit(): void {}

  buscar(): void {
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
  }
}
