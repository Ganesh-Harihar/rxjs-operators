import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  users = [
    { name: 'Ganesh', age: 20 },
    { name: 'Amit', age: 30 },
    { name: 'Abhi', age: 21 }
  ]

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    /**
     * Example 1: filter for even number
     */
    from([1, 2, 3, 4, 5, 6]).pipe(filter(ele => ele % 2 == 0)).subscribe((res) => {
      this.designUtilityService.addToList(res, 'example1');
    })

    /**
     * Example 2: filter objects based on property
     */
    from(this.users).pipe(filter(ele => ele.age >= 20 && ele.age < 30)).subscribe((res) => {
      this.designUtilityService.addToList(res.name, 'example2');
    })
  }
}
