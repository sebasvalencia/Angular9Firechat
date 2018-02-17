import { Injectable } from "@angular/core";
import { Mensaje } from "../interface/Mensaje.interface";

import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ChatService {
  public chats: Mensaje[] = [];
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  constructor(private afs: AngularFirestore) {}

  cargarMensajes() {
    //item lo q recibe y el nombre del nombre = chats
    this.itemsCollection = this.afs.collection<Mensaje>("chats");
    //estoy pendiente de los cambios en el nodo chats
    //.map: trabaja con un observable la trasforma y regresa algo
    return this.itemsCollection.valueChanges().map((mensajes: Mensaje[]) => {
      console.log(mensajes);
      this.chats= mensajes;
    });
  }

  agregarMensaje( texto:string ){
    //falta uid del usuario
    let mensaje:Mensaje = {
      nombre:'SebastianDemo',      
      mensaje: texto,
      fecha: new Date().getTime()
    }

    return this.itemsCollection.add(mensaje);

  }


}
