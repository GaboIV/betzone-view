import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SUBIDA_IMG, URL_FECHA, URL_CATEGORIAS, URL_DEPOSITO, URL_CHANGELOG } from '../comun/link';
import { Pago } from '../modelos/pago.modelo';

@Injectable({
  providedIn: 'root'
})
export class GeneralesService {

  public largoVentana: any;
  public largoCentral: any;

  fecha: any;

  constructor(
    private http: HttpClient
  ) { }

  subirImagen( id: string, selectedFile: File, carpeta ) {
    const uploadData = new FormData();
    uploadData.append('myFile', selectedFile, selectedFile.name);
    return this.http.post( URL_SUBIDA_IMG + '?id=' + id + '&c=' + carpeta, uploadData)
      .pipe(map ( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  cargarCategoriasJuegos() {
    const url = URL_CATEGORIAS + '/juegos';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp.juegos;
      }));
  }

  recibirHora() {
    const url = URL_FECHA + '/hora/actual';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        this.fecha = resp.fecha;
        return resp.fecha;
      }));
  }

  query() {
     this.largoVentana = window.innerHeight;
     this.largoCentral = this.largoVentana;
     this.largoCentral += 'px';

     $(window).resize( () => {
       this.largoVentana = window.innerHeight;
       this.largoCentral = this.largoVentana;
       this.largoCentral += 'px';
      });
  }

  cargarCuentas () {
    const url = URL_DEPOSITO + '/cuentas';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp.cuentas;
      }));
  }

  cargarBancos () {
    const url = URL_DEPOSITO + '/bancos';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp.bancos;
      }));
  }

  cargarPagos ( ) {
    const url = URL_DEPOSITO + '/pagos';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp.pagos;
      }));
  }

  cargarChangelog ( dato ) {
    const url = URL_CHANGELOG + '/ver/' + dato;

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp;
      }));
  }

  crearPago(pago: Pago) {
    const url = URL_DEPOSITO + '/pagos/agregar';

    return this.http.post( url, pago )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  agregarTarea(tarea, id_usuario) {
    const url = URL_CHANGELOG + '/agregar';

    return this.http.post( url, {tarea, id_usuario} )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  actualizarEstatusTarea(id_cl) {
    const url = URL_CHANGELOG + '/actualizar';

    return this.http.post( url, { id_cl } )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  actualizarPago(id_pago, estatus) {
    const url = URL_DEPOSITO + '/pago/actualizar';

    return this.http.post( url, { id_pago, estatus } )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }
}
