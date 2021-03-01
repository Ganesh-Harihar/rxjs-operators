import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { pluck, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-and-with-latest',
  templateUrl: './combine-and-with-latest.component.html',
  styleUrls: ['./combine-and-with-latest.component.scss']
})
export class CombineAndWithLatestComponent implements OnInit, AfterViewInit {

  names = ['Ganesh', 'Sujit', 'Nikhil', 'Amit'];
  colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger'];

  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const nameObservable = fromEvent(this.name.nativeElement, 'change').pipe(pluck('target', 'value'));
    const colorObservable = fromEvent(this.color.nativeElement, 'change').pipe(pluck('target', 'value'));

    /**
     * Ex - 01 CombineLatest
     */
    combineLatest(nameObservable, colorObservable).subscribe(([name, color]: any) => {
      this.createDiv(name, color, 'combineLatest');
    })

    /**
     * Ex - 02 WithLatestFrom
     * Master - nameObservable
     * Slave - colorObservable
     */
    nameObservable.pipe(withLatestFrom(colorObservable)).subscribe(([name, color]: any) => {
      this.createDiv(name, color, 'withLatestFrom');
    })
  }

  createDiv(data: string, color: string, container: string): void {
    let el = document.createElement('div');
    el.innerText = data;
    el.classList.add(color, 'p-3', 'mx-2');
    document.getElementById(container)?.appendChild(el);
  }

}
