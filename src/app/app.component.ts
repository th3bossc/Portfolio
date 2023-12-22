import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  constructor(private primeconfig: PrimeNGConfig) { }
  ngOnInit() {
    window.location.href = "https://portfolio-v2-th3bosscs-projects.vercel.app/"
    this.primeconfig.ripple = true;
  }
}
