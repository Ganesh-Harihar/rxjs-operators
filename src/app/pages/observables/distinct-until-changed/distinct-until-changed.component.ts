import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent implements OnInit {

  userOne = { name: 'Ganesh', age: 20 };
  userFour = this.userOne;
  userTwo = { name: 'amit', age: 20 };
  userThree = { name: 'Ganesh', age: 20 };

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    /**
     * Example 1: distinctUntilChanged with basic values
     */
    of(1, 1, 2, 2, 2, 3, 3, 4)
      .pipe(distinctUntilChanged())
      .subscribe((res) => {
        this.designUtilityService.addToList(res, 'example1');
      })

    /**
     * Example 2: distinctUntilChanged with objects
     */
    from([this.userOne, this.userFour, this.userTwo, this.userFour])
      .pipe(distinctUntilChanged())
      .subscribe((res) => {
        this.designUtilityService.addToList(JSON.stringify(res), 'example2');
      })
  }

}
