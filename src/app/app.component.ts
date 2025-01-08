import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NzLayoutModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nachschreibeverwaltung';
}
