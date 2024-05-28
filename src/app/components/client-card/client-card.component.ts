import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ClientCaseService } from '../../../services/client-case.service';
import { of } from 'rxjs';
import { Client } from '../../../services/user.interface';

@Component({
  selector: 'app-client-card',
  standalone: true,
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.scss',
  imports: [CommonModule],
})
export class ClientCardComponent implements OnInit {


  constructor(public clientsService: ClientCaseService) { }

  clients: any[] = [];


  ngOnInit(): void {
    this.clientsService.getAllClients().subscribe(clients => {
      this.clients = clients;
    });
  }
}
