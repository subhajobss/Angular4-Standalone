import { Component } from '@angular/core';

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styles:[`
  .white-color{
    color : white;
  }
  `]
})
export class ServerComponent{
  serverName = '';
  allowServer = true;
  username = '';
  clicks = [];
  displayServer = true;

  
  constructor(){
    setTimeout(() => {
      this.allowServer = false;
    },4000);
  }
  
  onUpdateServerName(event : Event){
     this.serverName =(<HTMLInputElement> event.target).value;
  }

  resetUser(){
    this.username = '';
  }

  toggleDisplay(event){
    this.displayServer = !this.displayServer;
    this.clicks.push(<HTMLInputElement>event.timeStamp);
  }

}
