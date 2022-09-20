export class softskill {
  id?: number;
  habilidad: string;
  porcentaje: number;
  tooltip: string;

  constructor(habilidad: string, porcentaje: number, tooltip: string) {
    this.habilidad=habilidad;
    this.porcentaje=porcentaje;
    this.tooltip=tooltip;
  }
}
