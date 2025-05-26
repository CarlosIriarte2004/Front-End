import { Component } from '@angular/core';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BienvenidaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SisInfo1-Proyec';
}

