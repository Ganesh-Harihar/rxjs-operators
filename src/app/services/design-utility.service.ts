import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  addToList(val: string, containerId: string) {
    const el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
}
