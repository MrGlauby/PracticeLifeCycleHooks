import { Component } from '@angular/core';
import { TeamcardComponent } from "../../components/teamcard/teamcard.component";

@Component({
    selector: 'app-toronto-maple-leafs',
    standalone: true,
    templateUrl: './toronto-maple-leafs.component.html',
    styleUrl: './toronto-maple-leafs.component.scss',
    imports: [TeamcardComponent]
})
export class TorontoMapleLeafsComponent {
    teamname: string = 'Toronto Maple Leafs';
}
