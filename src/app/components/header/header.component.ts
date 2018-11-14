import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarEvent: EventEmitter<any> = new EventEmitter();
  @Input() toggleSideBar: Function;
  constructor() { }

  ngOnInit() {
  }

  sideBarToggle() {
    this.toggleSideBarEvent.emit();
  }
}
