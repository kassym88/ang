import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit  {
  title = 'proj1';
  sideBarActive = false;

  ngOnInit() {
    this.toggleSideBar.bind(this);
  }

  toggleSideBarEvent(): void {
    this.sideBarActive = !this.sideBarActive;
  }

  toggleSideBar = () => {
    this.sideBarActive = !this.sideBarActive;
  }
}
