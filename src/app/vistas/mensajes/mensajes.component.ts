import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InicioSesionService } from 'src/app/servicios/inicio-sesion.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css', '../opciones/historial/historial.component.css']
})
export class MensajesComponent implements OnInit {

  mensajes: any;

  constructor(
    private route: ActivatedRoute,
    public _inicioSesion: InicioSesionService,
  ) { }

  ngOnInit() {
    this.cargarMensajes( '1', 'todas', this._inicioSesion.usuario.id_usuario );
  }

  cargarMensajes( pagina, criterio, id_usuario ) {
    this._inicioSesion.cargarMensajes( pagina, criterio, id_usuario )
    .subscribe(resp => {
      console.log( resp.mensajes );
      this.mensajes = resp.mensajes;
    });
  }

}
