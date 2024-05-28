import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientCaseService {

  public clients: Client[] = [
    {
      name: 'Max Mustermann',
      address: '12345 Musterstadt',
      cases: [
        {
          caseId: 1,
          caseDescription: 'Scheidung',
          caseStatus: 'open'
        },
        {
          caseId: 2,
          caseDescription: 'Erbschaftsangelegenheit',
          caseStatus: 'closed'
        }
      ]
    },
    {
      name: 'Jon Doe',
      address: '54321 Erfurt',
      cases: [
        {
          caseId: 3,
          caseDescription: 'Unfall',
          caseStatus: 'in-progress'
        }
      ]
    },
    {
      name: 'Peter Petersilie',
      address: 'q3421 Leipzig',
      cases: [
        {
          caseId: 4,
          caseDescription: 'Diebstahl',
          caseStatus: 'in-progress'
        }
      ]
    },
    {
      name: 'Körper Klaus',
      address: '0361 Berlin',
      cases: [
        {
          caseId: 5,
          caseDescription: 'Dope war schlecht',
          caseStatus: 'closed'
        }
      ]
    },
    {
      name: 'Benjamin Blümchen',
      address: '0361 Neustadt',
      cases: [
        {
          caseId: 6,
          caseDescription: 'Hat Otto gefresse!',
          caseStatus: 'open'
        }
      ]
    },
  ];


 public getAllClients(): Observable<Client[]> {
    return of(this.clients);

  }

  // public getAllClients(): Observable<Client[]> {
  //   return of(this.clients);
  // }


  constructor() { }
}
