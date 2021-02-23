import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {

  dell: Object = {
    brand: 'Dell',
    hardDisk: '1 TB',
    color: 'Black'
  }

  buyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell);
    }, 1600);
  })

  buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());

  constructor() { }

  ngOnInit(): void { }


  fetch1() {
    const result1: HTMLElement = <HTMLElement>document.getElementById('result1');
    result1.innerText = 'Fetching data...';
    this.buyLaptop.then((res) => {
      result1.innerText = JSON.stringify(res);
    })
  }

  async fetch2() {
    const result2: HTMLElement = <HTMLElement>document.getElementById('result2');
    result2.innerText = 'Fetching data...';
    result2.innerText = JSON.stringify(await this.buyLaptop);
  }

  async fetch3() {
    const result3: HTMLElement = <HTMLElement>document.getElementById('result3');
    result3.innerText = 'Fetching data...';
    result3.innerText = JSON.stringify(await this.buyLaptop2);
  }
}
