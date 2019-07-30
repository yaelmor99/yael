import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c7',
  templateUrl: './c7.component.html',
  styleUrls: ['./c7.component.css']
})
export class C7Component implements OnInit {
  @Input() bg;

  constructor() { }

  ngOnInit() {
  }

}
