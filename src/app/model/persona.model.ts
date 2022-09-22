export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  profesion: string;
  direccion: string;
  acerca_de: string;
  foto: string;
  linkedin: string;
  github: string;

  constructor(
    nombre: string,
    apellido: string,
    profesion: string,
    direccion: string,
    acerca_de: string,
    foto: string,
    linkedin: string,
    github: string

  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.profesion = profesion;
    this.direccion = direccion;
    this.acerca_de = acerca_de;
    this.foto = foto;
    this.linkedin= linkedin;
    this.github= github;
  }
}
