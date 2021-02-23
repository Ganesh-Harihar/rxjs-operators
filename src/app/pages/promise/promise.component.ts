import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseValue: string = 'Please click the below button';

  constructor() { }

  ngOnInit(): void { }

  buyDellLaptop() {
    return false;
  }

  buyHpLaptop() {
    return true;
  }
  runPromise() {
    const buyLaptop = new Promise<string>((resolve, reject) => {
      this.promiseValue = 'Processing...'
      if (this.buyDellLaptop()) {
        return setTimeout(() => {
          resolve('Dell purchased..')
        },3000);
      } else if (this.buyHpLaptop()) {
        return setTimeout(() => {
          resolve('Hp purchased..')
        },3000);
      } else {
        return setTimeout(() => {
          resolve('Laptop is not available on store');
        },3000);
      }
    });

    buyLaptop.then((res: string) => {
      this.promiseValue = res;
    }).catch((error) => this.promiseValue = error);
  }

}
