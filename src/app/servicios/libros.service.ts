import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Libro } from "../Modelos/libro";

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libroList: AngularFireList<any>; //bien pudiera ponerlo <Libro> pero no hace falta en si.

  constructor(private angularFireDatabase: AngularFireDatabase) { 

  }

  //Metodo para retonar todos los libros disponibles
  getLibros(){}

  //Recibira un id y retornara el libro correspondiente
  getLibro(id: any){}

  //metodo para Agregar libro
  addLibro(libro: Libro){}

  //metodo para actualizar libro
  updateLibro(id: any, libro: Libro){}

  //metodo para eliminar libro
  deleteLibro(id: any){}

}
