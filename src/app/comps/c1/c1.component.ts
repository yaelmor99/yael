import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
title='yael';
@Input() bg;

aru='asdf'
  constructor() { }

  ngOnInit() {
  }


}
