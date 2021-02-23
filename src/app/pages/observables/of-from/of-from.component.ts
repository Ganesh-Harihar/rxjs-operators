import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  sampleOfObservableObject: any = {};

  ofObservableStrings = of('Ganesh', 'Amit', 'Nikhil');
  ofObservableObject = of({ a: 'Ganesh', b: 'Amit', c: 'Nikhil' });

  fromObservable = from(['Ganesh', 'Amit', 'Nikhil']);
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3000)
  })
  fromObservableString = from('Hello World');

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {

    /**
     *  of('Ganesh', 'Amit', 'Nikhil');
     */
    this.ofObservableStrings.subscribe((data) => {
      this.designUtilityService.addToList(data, 'ofListContainerStrings');
    })

    /**
     * of({ a: 'Ganesh', b: 'Amit', c: 'Nikhil' })
     */

    this.ofObservableObject.subscribe((data) => {
      this.sampleOfObservableObject = data
    })

    /**
     * from(['Ganesh', 'Amit', 'Nikhil']);
     */
    this.fromObservable.subscribe((data) => {
      this.designUtilityService.addToList(data, 'fromListContainerArray');
    })

    /**
     * from Promise
     */
    const promiseObservables = from(this.promise);
    promiseObservables.subscribe((data: any) => {
      this.designUtilityService.addToList(data, 'fromListContainerPromise')
    })

    /**
     * from('Hello World')
     */
    this.fromObservableString.subscribe((data) => {
      this.designUtilityService.addToList(data, 'fromListContainerString');
    })
  }

}
