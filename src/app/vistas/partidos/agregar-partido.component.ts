import { Component, OnInit, HostListener } from '@angular/core';
import { DeportesService } from '../../servicios/deportes.service';
import { Deporte } from '../../modelos/deporte';
import { PartidosService } from 'src/app/servicios/partidos.service';
import { EquiposService } from 'src/app/servicios/equipos.service';
import { Partido } from 'src/app/modelos/partido';
import swal from 'sweetalert2';
import { Equipo } from '../../modelos/equipos';
import { Liga } from '../../modelos/ligas';
declare var $: any;



@Component({
  selector: 'app-agregar-partido',
  templateUrl: './agregar-partido.component.html',
  styleUrls: ['./agregar-partido.component.css']
})
export class AgregarPartidoComponent implements OnInit {

  deportes: Deporte[];
  ligas: Liga[];
  equipos: Equipo[];

  selectMostrar = '';

  depor: Deporte[] = [];

  lig: Liga[] = [];

  eq1: Equipo[] = [];
  eq2: Equipo[] = [];
  eq3: Equipo[] = [];

  tipoCuota = '1';

  partido: Partido = new Partido('', '', '0', null, null, '', '', '', '', '', '0', '', [], '', '', [], '', '');

  constructor(
    public _deportesService: DeportesService,
    public _partidosService: PartidosService,
    public _equipoService: EquiposService,
  ) { }

  ngOnInit() {
    this.cargarDeportes();
  }

  cargarDeportes() {
    this._deportesService.cargarDeportes()
          .subscribe( deportes => {
            this.deportes = deportes;
            this.depor = deportes;
          });
  }

  seleccionDeporte ( seleccion, nombre ) {
    this.partido.id_categoria =  seleccion;
    this.partido.id_liga = null;
    $('#ipt_liga').val('');
    this.partido.descripcion = [];
    this.partido.equipos = [];
    $('.select_equipo').val('');
    $('.select_div').val('');
    this.selectMostrar = '';
    this.ligas = null;
    $('#ipt_deporte').val(nombre);
    this._deportesService.seleccionDeporte( seleccion )
    .subscribe( ligas => {
      this.ligas = ligas;
      this.lig = ligas;
    });
  }

  cargarEquipos(liga, nombre) {
    this.partido.id_liga = liga;
    $('#ipt_liga').val(nombre);
    this.partido.descripcion = [];
    this.partido.equipos = [];
    $('.select_equipo').val('');
    $('.select_div').val('');
    this.selectMostrar = '';
    this._deportesService.cargarEquipos(liga)
    .subscribe( resp => {
      this.equipos = resp.equiposui;
      this.eq1 = resp.equiposui;
      this.eq2 = resp.equiposui;
      this.eq3 = resp.equiposui;
    });
  }

  enviarDatos ( f ) {
    this.partido.equipos[0] = $('#ipt_eq1').val();
    this.partido.equipos[1] = $('#ipt_eq2').val();
    if ( this.tipoCuota === '2' ) {
      this.partido.descripcion[0] = $('#div_e1').val();
      this.partido.descripcion[1] = $('#div_e2').val();
    }

    if ( this.tipoCuota === '1') {
      this.partido.descripcion[0] = this.partido.descripcion[3];
      this.partido.descripcion[1] = this.partido.descripcion[4];
    }

    if ($('#ipt_eq3').val() !== '' ) {
      this.partido.equipos[2] = $('#ipt_eq3').val();

      if ( this.tipoCuota === '2' ) {
        this.partido.descripcion[2] = $('#div_e3').val();
      }

      if ( this.tipoCuota === '1' ) {
        this.partido.descripcion[2] = this.partido.descripcion[5];
      }
    }
    
    const swalWithBootstrapButtons = swal.mixin({});

    swalWithBootstrapButtons({
      title: '¿Deseas enviar estos datos?',
      // tslint:disable-next-line:max-line-length
      html: 'Equipo 1: ' + this.partido.equipos[0] + ' (' + this.partido.descripcion[0] + ')<br> Equipo 2: ' + this.partido.equipos[1] + ' (' + this.partido.descripcion[1] + ')<br> Equipo 3: ' + this.partido.equipos[2] + ' (' + this.partido.descripcion[2] + ')',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._partidosService.crearPartido( this.partido )
        .subscribe( resp => {
          if (resp.status === 'correcto') {
            swalWithBootstrapButtons(
              '¡Partido agregado!',
              'Los datos se han guardado correctamente',
              'success'
            );
            this.partido.equipos = [];
            this.partido.descripcion = [];
          }

          if ( resp.status === 'existe') {
            swal ('Partido existente', resp.mensaje, 'info');
          }
        });
      } else if (
        result.dismiss === swal.DismissReason.cancel
      ) {
      }
    });
  }

  gcd ( a, b ) {
    if (b < 0.0000001) { return a; }
    return this.gcd(b, Math.floor(a % b));
  }

  cuotaDecimal (valor, i) {
    if ( this.tipoCuota === '2') {
      const datos = valor.split('/');
      let res;
      if ( datos[1] ) {
        res = (datos[0] / datos[1]) + 1 ;
      } else {
        res = (datos[0] * 1) + 1;
      }

      const res2 = res.toFixed(2);
      const ni = i + 3;

      this.partido.descripcion[ni] = res2;
    }

    if ( this.tipoCuota === '1') {
      const datos = (valor - 1).toFixed(3);
      const len = datos.toString().length - 2;

      let denominator = Math.pow(10, len);
      let numerator = parseFloat(datos) * denominator;

      const divisor = this.gcd(numerator, denominator);

      numerator /= divisor;
      denominator /= divisor;

      const fraq = Math.floor(numerator) + '/' + Math.floor(denominator);

      const ni = i + 3;

      this.partido.descripcion[ni] = fraq;
    }
  }

  clickedInside($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    if ( $('.select_form').is(':focus') ) {

    } else {
      this.selectMostrar = '';
    }
  }

  seleccionCuota ( cuota, nombre ) {
    this.tipoCuota = cuota;
    this.selectMostrar = '';
    $('#ipt_cuota').val(nombre);
  }

  seleccionEquipo ( id_equipo, nombre, i ) {
    $('#ipt_eq' + i).val( nombre );
    this.selectMostrar = '';
  }

  buscarDeporte (descripcion) {
    this.depor = [];

    if ( descripcion !== '') {
      const busqueda = new RegExp(descripcion, 'i');
      const depor = this.deportes.filter( deportes => busqueda.test( deportes.descripcion ) );
      this.depor = depor;
    } else {
      this.depor = this.deportes;
    }
  }

  buscarLiga (descripcion) {
    this.lig = [];

    if ( descripcion !== '') {
      const busqueda = new RegExp(descripcion, 'i');
      const lig = this.ligas.filter( ligas => busqueda.test( ligas.nombre_liga ) );
      this.lig = lig;
    } else {
      this.lig = this.ligas;
    }
  }

  buscarEquipo1 (descripcion, i) {
    this.eq1 = [];

    if ( descripcion !== '') {
      const busqueda = new RegExp(descripcion, 'i');
      const eq1 = this.equipos.filter( equipos => busqueda.test( equipos.nombre_equipo ) );
      this.eq1 = eq1;
    } else {
      this.eq1 = this.equipos;
    }
  }
  buscarEquipo2 (descripcion, i) {
    this.eq2 = [];

    if ( descripcion !== '') {
      const busqueda = new RegExp(descripcion, 'i');
      const eq2 = this.equipos.filter( equipos => busqueda.test( equipos.nombre_equipo ) );
      this.eq2 = eq2;
    } else {
      this.eq2 = this.equipos;
    }
  }
  buscarEquipo3 (descripcion, i) {
    this.eq3 = [];

    if ( descripcion !== '') {
      const busqueda = new RegExp(descripcion, 'i');
      const eq3 = this.equipos.filter( equipos => busqueda.test( equipos.nombre_equipo ) );
      this.eq3 = eq3;
    } else {
      this.eq3 = this.equipos;
    }
  }
}
