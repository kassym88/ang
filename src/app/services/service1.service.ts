import { Injectable } from '@angular/core';
import { Navitem } from 'app/classes/Navitem';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }

  getNavItems() {
    const Navitems: Navitem[] = [
      new Navitem(
        '/home',
        true,
        'Home',
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="20" height="20" width="20"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>'
      )
    ];
  }
}
