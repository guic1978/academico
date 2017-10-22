import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html'
})
export class SubMenuComponent implements OnInit {
  public totalItems: number = 0;
  public totalUserMessages: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
