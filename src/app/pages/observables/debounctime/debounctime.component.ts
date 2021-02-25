import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-debounctime',
  templateUrl: './debounctime.component.html',
  styleUrls: ['./debounctime.component.scss']
})
export class DebounctimeComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    /**
     * Example 1: Debouncing based on time between input (1000)
     */
    fromEvent(document.getElementById('input')!, 'keyup')
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(1000)
      )
      .subscribe((input) => {
        this.designUtilityService.addToList(input,'example1');
      })
  }

}
