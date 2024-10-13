import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { itinerario } from "../models/itinerario";

@Injectable({
  providedIn: 'root'
})
export class EntrafesaService {
  private url: string = 'http://localhost:8080/api/itinerarios';

  constructor(private http: HttpClient) { }

  // API para filtrar itinerarios desde el backend
  buscarItinerario(origen: string, destino: string, fechaViaje: Date): Observable<itinerario[]> {
    const fechaFormateada = fechaViaje.toISOString();  // Convierte  fechaVijae a  string
    return this.http.get<itinerario[]>(`${this.url}/filtrar/${origen}/${destino}/${fechaFormateada}`);
  }
  
}
