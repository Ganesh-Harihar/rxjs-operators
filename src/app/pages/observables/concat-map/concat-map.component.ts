import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatAll, concatMap, delay, map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  source = from(['Tech', 'Comedy', 'News']);

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    /**
     * EX - 01 | map
     */
    this.source.pipe(map(v => this.getData(v)))
      .subscribe((res => this.designUtilityService.addToList(res, 'mapList')));

    /**
     * Ex - 02 | map + mergeAll
     */
    this.source.pipe(
      map(v => this.getData(v)),
      concatAll()
    ).subscribe((res => this.designUtilityService.addToList(res, 'mapPlusConcatAllList')));

    /**
     * Ex - 03 | margeMap
     */
    this.source.pipe(concatMap(v => this.getData(v)))
      .subscribe((res => this.designUtilityService.addToList(res, 'concatMapList')));
  }

  getData(data: string): Observable<string> {
    return of(data + ' video uploaded').pipe(delay(3000));
  }

}
