import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, of, throwError, zip } from 'rxjs';
import { catchError, pluck, take } from 'rxjs/operators';
@Component({
  selector: 'app-zip-and-forkjoin',
  templateUrl: './zip-and-forkjoin.component.html',
  styleUrls: ['./zip-and-forkjoin.component.scss']
})
export class ZipAndForkjoinComponent implements OnInit, AfterViewInit {

  names = ['Ganesh', 'Sujit', 'Nikhil', 'Amit'];
  colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger'];

  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const nameObservable = fromEvent(this.name.nativeElement, 'change').pipe(pluck('target', 'value'), take(4));
    const colorObservable = fromEvent(this.color.nativeElement, 'change').pipe(pluck('target', 'value'), take(3));

    /**
     * Ex - 01 Zip
     */
    zip(nameObservable, colorObservable).subscribe(([name, color]: any) => {
      this.createDiv(name, color, 'zip');
    });

    /**
     * Ex - 02 ForkJoin
     */
    forkJoin([nameObservable, colorObservable]).subscribe(([name, color]: any) => {
      this.createDiv(name, color, 'forkjoin');
    });


    /**
     * Multiple api request call
     */
    zip(
      fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()),
      throwError('Error occurred').pipe(catchError(v => of(v))))
      .subscribe((res) => {
        console.log('Using zip :', res);
      });

    forkJoin([
      fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()),
      throwError('Error occurred').pipe(catchError(v => of(v)))])
      .subscribe((res) => {
        console.log('Using forkJoin :', res);
      });

    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()),
      throwError('Error occurred').toPromise()
    ]).then(res => console.log('Using promise.all :', res))
      .catch(_ => console.error('Error occurred in promise.all'));

  }

  createDiv(data: string, color: string, container: string): void {
    const el = document.createElement('div');
    el.innerText = data;
    el.classList.add(color, 'p-3', 'mx-2');
    document.getElementById(container)?.appendChild(el);
  }

}
