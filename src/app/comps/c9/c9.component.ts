import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yael',
  templateUrl: './c9.component.html',
  styleUrls: ['./c9.component.css']
})
export class C9Component implements OnInit {
  @Input() bg;

  constructor() { }

  ngOnInit() {
  }

}
