import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  constructor(private primeconfig : PrimeNGConfig) {}
  
  ngOnInit() {
    this.primeconfig.ripple = true;
  }
}
