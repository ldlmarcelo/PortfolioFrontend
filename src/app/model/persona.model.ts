export class persona{
id?: number;
nombre: String;
apellido: String;
profesion: String;
direccion: String;
acerca_de: String;
foto: String;

constructor(nombre:String,apellido:String,profesion:String,direccion:String,acerca_de:String,foto:String){
  this.nombre = nombre;
  this.apellido = apellido;
  this.profesion = profesion;
  this.direccion = direccion;
  this.acerca_de = acerca_de;
  this.foto = foto;

}

}
