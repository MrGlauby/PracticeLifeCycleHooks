import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [RouterLink, FormComponent],
})
export class HomeComponent {

}
