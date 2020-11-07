import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { request } from 'http';
import { Libro } from "../Modelos/libro";

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libroList: AngularFireList<any>; //bien pudiera ponerlo <Libro> pero no hace falta en si.

  constructor(private angularFireDatabase: AngularFireDatabase) { 

  }

  //Metodo para retonar todos los libros disponibles
  getLibros(){
    //Con esto asociamos la conexion remota a nuestra lista local
    return this.libroList = this.angularFireDatabase.list('libro');
  }

  //Recibira un id y retornara el libro correspondiente
  //getLibro(id: any){}

  //metodo para Agregar libro
  addLibro(request: Libro){
    this.libroList.push({
      titulo: request.titulo,
      sipnosis: request.sipnosis,
      autor: request.autor,
      cantPaginas: request.cantPaginas,
      status: request.status,
      fechaCreacion: request.fechaCreacion,
      fechaPublicacion: request.fechaPublicacion,
      imagePath: request.imagePath
    })
  }

  //metodo para actualizar libro
  updateLibro(id: any, request: Libro){
    this.libroList.update(id, {
      titulo: request.titulo,
      sipnosis: request.sipnosis,
      autor: request.autor,
      cantPaginas: request.cantPaginas,
      status: request.status,
      fechaCreacion: request.fechaCreacion,
      fechaPublicacion: request.fechaPublicacion,
      imagePath: request.imagePath
    })
  }

  //metodo para eliminar libro
  deleteLibro(id: any){
    this.libroList.remove(id);
  }

}
