import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamcardComponent } from '../../components/teamcard/teamcard.component';

@Component({
  selector: 'app-edmonton-oilers',
  standalone: true,
  templateUrl: './edmonton-oilers.component.html',
  styleUrls: ['./edmonton-oilers.component.scss'],
  imports: [CommonModule, TeamcardComponent]
})
export class EdmontonOilersComponent {
  teamname: string = 'Edmonton Oilers';

}
