export class proyecto {
  id?: number;
  titulo: string;
  subtitulo: number;
  detalle: string;
  link: string;

  constructor(titulo: string, subtitulo: number, detalle: string, link: string) {
    this.titulo=titulo;
    this.subtitulo=subtitulo;
    this.detalle=detalle;
    this.link=link;
  }
}
