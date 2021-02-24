import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {


  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {

    /**
     * using interval
     */
    const observable1 = interval(1000);
    observable1.pipe(take(5), toArray()).
      subscribe((res) => this.designUtilityService.addToList(res, 'fromArrayListContainerInterval'));

    /**
     * using fromAray
     */
    const observable2 = from(['Ganesh', 'Amit', 'Nikhil']);
    observable2.pipe(toArray()).
      subscribe((res: any) => this.designUtilityService.addToList(res, 'fromArrayListContainerArray'));
  }


}
