import { Injectable } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ChatService {
  public chats: any[] = [];
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {

  }

  cargarMensajes(){

    //item lo q recibe y el nombre del nombre = chats
    this.itemsCollection = this.afs.collection<any>('chats');
    //estoy pendiente de los cambios en el nodo chats
    return this.itemsCollection.valueChanges();

  }

}
