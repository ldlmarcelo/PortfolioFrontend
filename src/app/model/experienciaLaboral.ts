
export class experienciaLaboral{

  id!: number;
  fecha: string;
  empresa: string;
  logo: string;
  puesto: string;
  descripcion: string;

  constructor(

    fecha: string,
    empresa: string,
    logo: string,
    puesto: string,
    descripcion: string
  ){
  this.fecha = fecha;
  this.empresa = empresa;
  this.logo = logo;
  this.puesto = puesto;
  this.descripcion = descripcion;
  }

}

