import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c6',
  templateUrl: './c6.component.html',
  styleUrls: ['./c6.component.css']
})
export class C6Component implements OnInit {
  @Input() bg;

  constructor() { }

  ngOnInit() {
  }

}
