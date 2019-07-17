import { Component, OnInit ,OnDestroy } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ngWebSocketProject';
  subject = webSocket('wss://connect.websocket.in/novellof?room_id=1990')
  message = ""
  messagesHtml = ""

  constructor() {
    this.subject.subscribe( msg =>{
      this.messagesHtml = this.messagesHtml + `<h1>${msg['message']}</h1>`
    })
  }

  ngOnInit() {

  }

  sendMsg() {
    this.messagesHtml = this.messagesHtml + `<h1>${this.message}</h1>`
    this.subject.next({message: this.message})
  }

}
