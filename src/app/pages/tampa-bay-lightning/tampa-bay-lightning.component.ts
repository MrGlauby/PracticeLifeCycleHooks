import { Component } from '@angular/core';
import { TeamcardComponent } from "../../components/teamcard/teamcard.component";

@Component({
    selector: 'app-tampa-bay-lightning',
    standalone: true,
    templateUrl: './tampa-bay-lightning.component.html',
    styleUrl: './tampa-bay-lightning.component.scss',
    imports: [TeamcardComponent]
})
export class TampaBayLightningComponent {
    teamname: string = 'Tampa Bay Lightning';
}
