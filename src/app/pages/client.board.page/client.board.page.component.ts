import { Component } from '@angular/core';
import { ClientCardComponent } from '../../components/client-card/client-card.component';

@Component({
  selector: 'app-client.board.page',
  standalone: true,
  templateUrl: './client.board.page.component.html',
  styleUrl: './client.board.page.component.scss',
  imports: [ClientCardComponent]
})
export class ClientBoardPageComponent {

  
}

