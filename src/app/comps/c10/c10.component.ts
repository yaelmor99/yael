import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mor',
  templateUrl: './c10.component.html',
  styleUrls: ['./c10.component.css']
})
export class C10Component implements OnInit {
  @Input() bg;

  constructor() { }

  ngOnInit() {
  }

}
