import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private activatedRoute : ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.fragment.subscribe((value) => this.jumpTo(value));
  }
  

  jumpTo(section : string) : void{
    if (section)
      document.getElementById(section).scrollIntoView({behavior : 'smooth'});
  }
}
