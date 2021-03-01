import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { pluck, take, withLatestFrom } from 'rxjs/operators';

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
    const nameObservable = fromEvent(this.name.nativeElement, 'change').pipe(pluck('target', 'value'),take(4));
    const colorObservable = fromEvent(this.color.nativeElement, 'change').pipe(pluck('target', 'value'),take(3));

    /**
     * Ex - 01 Zip
     */
    zip(nameObservable, colorObservable).subscribe(([name, color]: any) => {
      this.createDiv(name, color, 'zip');
    })

    /**
     * Ex - 02 ForkJoin
     */
    forkJoin(nameObservable, colorObservable).subscribe(([name, color]: any) => {
      this.createDiv(name, color, 'forkjoin');
    })
  }

  createDiv(data: string, color: string, container: string): void {
    let el = document.createElement('div');
    el.innerText = data;
    el.classList.add(color, 'p-3', 'mx-2');
    document.getElementById(container)?.appendChild(el);
  }


}
