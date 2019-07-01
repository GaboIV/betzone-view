import { Injectable } from '@angular/core';
import {
  URL_CABALLOS,
  URL_JINETES,
  URL_ENTRENADORES,
  URL_HARAS,
  URL_STUDS,
  URL_HIPODROMOS,
  URL_CARRERAS,
  URL_INSCRIPCION,
  URL_SELECCION } from '../comun/link';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Caballo } from '../modelos/caballos';
import { Jinete } from '../modelos/jinetes';
import { Entrenador } from '../modelos/entrenadores';
import { Haras } from '../modelos/haras';
import { Studs } from '../modelos/studs';
import { Hipodromo } from '../modelos/hipodromo';
import { Carrera } from '../modelos/carrera';
import { Inscripcion } from '../modelos/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class CaballosService {

  carreras: Carrera[] = [];

  act_caballos = JSON.parse( localStorage.getItem('act_caballos') );
  act_jinetes = JSON.parse( localStorage.getItem('act_jinetes') );
  act_entrenadores = JSON.parse( localStorage.getItem('act_entrenadores') );
  act_haras = JSON.parse( localStorage.getItem('act_haras') );
  act_studs = JSON.parse( localStorage.getItem('act_studs') );
  act_hipodromos = JSON.parse( localStorage.getItem('act_hipodromos') );

  st_cab = ''; st_jin = ''; st_ent = ''; st_har = ''; st_stu = '';

  constructor(
    private http: HttpClient,
  ) { }

  cargarCaballos() {
    const url = URL_CABALLOS + '/ver/todos';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        if ( resp.status === 'correcto') {
          this.act_caballos = resp.actualizacion;
        }
        return resp;
      }));
  }

  cargarCaballosUI() {
    const url = URL_CABALLOS + '/caballosui';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp.caballosui;
      }));
  }

  cargarPadrillosUI() {
    const url = URL_CABALLOS + '/padrillosui';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp.padrillosui;
      }));
  }

  agregarMadrilla ( nombre, caballo ) {
    const url = URL_CABALLOS + '/madrilla/agregar';

    return this.http.post( url, {nombre, caballo} )
    .pipe(map( (resp: any) => {
      const res = resp;
      return res;
    }));
  }

  agregarPadrillo ( nombre, caballo ) {
    const url = URL_CABALLOS + '/padrillo/agregar';

    return this.http.post( url, {nombre, caballo} )
    .pipe(map( (resp: any) => {
      const res = resp;
      return res;
    }));
  }

  cargarMadrillasUI() {
    const url = URL_CABALLOS + '/madrillasui';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp.madrillasui;
      }));
  }

  cargarHarasUI() {
    const url = URL_CABALLOS + '/harasui';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp.harasui;
      }));
  }

  cargarJinetes() {
    const url = URL_JINETES + '/ver/todos';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp;
      }));
  }

  cargarJinetesUI() {
    const url = URL_CABALLOS + '/jinetesui';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp.jinetesui;
      }));
  }

  cargarEntrenadores() {
    const url = URL_ENTRENADORES + '/ver/todos';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp;
      }));
  }

  cargarEntrenadoresUI() {
    const url = URL_CABALLOS + '/entrenadoresui';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp.entrenadoresui;
      }));
  }

  cargarHaras() {
    const url = URL_HARAS + '/ver/todos';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp;
      }));
  }

  cargarStuds() {
    const url = URL_STUDS + '/ver/todos';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp;
      }));
  }

  cargarStudsUI() {
    const url = URL_CABALLOS + '/studsui';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp.studsui;
      }));
  }

  cargarHipodromos() {
    const url = URL_HIPODROMOS + '/ver/todos';

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp;
      }));
  }

  cargarCarreras(dato: string) {
    const url = URL_CARRERAS + '/ver/' + dato;

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        if ( resp.carreras) {
          this.carreras = resp.carreras;
          console.log( this.carreras );
        }
        return resp;
      }));
  }

  cargarUnaCarreras(dato: string) {
    const url = URL_CARRERAS + '/ver/' + dato;

    return this.http.get( url )
      .pipe(map ( (resp: any) => {
        return resp;
      }));
  }

  seleccionCarrera ( nro ) {
    if ( nro !== '') {
      const busqueda = new RegExp(nro, 'i');
      const carrera = this.carreras.filter( carreras => busqueda.test( carreras.id_carrera ) );
      return carrera;
    }
  }

  crearCaballo(caballo: Caballo) {
    const url = URL_CABALLOS + '/crear';

    return this.http.post( url, caballo )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  crearJinete(jinete: Jinete) {
    const url = URL_JINETES + '/crear';

    return this.http.post( url, jinete )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  crearEntrenador(entrenador: Entrenador) {
    const url = URL_ENTRENADORES + '/crear';

    return this.http.post( url, entrenador )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  crearHaras(haras: Haras) {
    const url = URL_HARAS + '/crear';

    return this.http.post( url, haras )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  crearStuds(stud: Studs) {
    const url = URL_STUDS + '/crear';

    return this.http.post( url, stud )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  crearHipodromo(hipodromo: Hipodromo) {
    const url = URL_HIPODROMOS + '/crear';

    return this.http.post( url, hipodromo )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  crearCarrera(carrera: Carrera) {
    const url = URL_CARRERAS + '/crear';

    return this.http.post( url, carrera )
    .pipe(map( (resp: any) => {
      const res = resp;
      return res;
    }));
  }

  crearInscripcion(inscripcion: Inscripcion) {
    const url = URL_INSCRIPCION + '/crear';

    return this.http.post( url, inscripcion )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  actualizarCaballo( caballo: Caballo  ) {
    const url = URL_CABALLOS + '/actualizar';

    return this.http.post( url, caballo )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  actualizarStud( stud: Studs  ) {
    const url = URL_STUDS + '/actualizar';

    const descripcion = stud.descripcion;
    const id_stud = stud.id_stud;

    return this.http.post( url, { descripcion, id_stud } )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  agregarIns ( numero, id_carrera ) {
    const url = URL_CARRERAS + '/inscribir/' + id_carrera + '/' + numero;
    return this.http.post( url, numero )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  retirarIns ( id_inscripcion ) {
    const url = URL_INSCRIPCION + '/retirar';
    
    return this.http.post( url, { id_inscripcion } )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  eliminarIns ( id_inscripcion ) {
    const url = URL_INSCRIPCION + '/eliminar/' + id_inscripcion;
    return this.http.delete( url )
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }

  enviarCarrera ( carrera: Carrera ) {
    const url = URL_CARRERAS + '/enviada';
    
    return this.http.post( url, { carrera })
      .pipe(map( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }
}
