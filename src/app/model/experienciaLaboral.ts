export class ExperienciaLaboral {
  id!: number;

  logo: string;
  empresa: string;
  puesto: string;
  fecha: string;
  descripcion: string;

  constructor(

    logo: string,
    empresa: string,
    puesto: string,
    fecha: string,
    descripcion: string
  ) {

    this.logo = logo;
    this.empresa = empresa;
    this.fecha = fecha;
    this.puesto = puesto;
    this.descripcion = descripcion;
  }
}
