import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje:string ="";

  constructor(public cs: ChatService) {
    this.cs.cargarMensajes().subscribe( 
      (mensajes:any[]) => {
        console.log(mensajes);
      }
     );
   }

  ngOnInit() {
  }

  enviarMensaje(){
    console.log(this.mensaje);
  }

}
