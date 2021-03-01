import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatAll, delay, map, switchAll, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  source = from(['Tech', 'Comedy', 'News']);

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    /**
     * EX - 01 | map
     */
    this.source.pipe(map(v => this.getData(v)))
      .subscribe((res => this.designUtilityService.addToList(res, 'mapList')));

    /**
     * Ex - 02 | map + switchAll
     */
    this.source.pipe(
      map(v => this.getData(v)),
      switchAll()
    ).subscribe((res => this.designUtilityService.addToList(res, 'mapPlusSwitchAllList')));

    /**
     * Ex - 03 | switchMap
     */
    this.source.pipe(switchMap(v => this.getData(v)))
      .subscribe((res => this.designUtilityService.addToList(res, 'switchMapList')));
  }

  getData(data: string): Observable<string> {
    return of(data + ' video uploaded').pipe(delay(2000));
  }
}
