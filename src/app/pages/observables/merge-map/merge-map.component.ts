import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

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
      mergeAll()
    ).subscribe((res => this.designUtilityService.addToList(res, 'mapPlusMergeAllList')));

    /**
     * Ex - 03 | margeMap
     */
    this.source.pipe(mergeMap(v => this.getData(v)))
      .subscribe((res => this.designUtilityService.addToList(res, 'mergeMapList')));
  }

  getData(data: string): Observable<string> {
    return of(data + ' video uploaded');
  }

}
