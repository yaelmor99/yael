import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component implements OnInit {
  @Input() bg;

  constructor() { }

  ngOnInit() {
  }

}
