import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  username = '';
  serverCreated = false;
  servers = ['testServer', 'testServerTwo']
  showDetails = false;
  buttonClicks = [];
  buttonCounter = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onResetUsername() {
    this.username = '';
  }

  isUsernameEmpty() {
    return this.username.length;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
    console.log('serverName:', this.serverName)
  }

  toggleDetails() {
    this.showDetails = !this.showDetails
    this.buttonCounter += 1;
    this.buttonClicks.push(this.buttonCounter)
  }
}
