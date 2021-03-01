import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  techSource = interval(3000).pipe(map(v => `Tech video #${v + 1}`), take(5));
  comedySource = interval(4000).pipe(map(v => `Comedy video #${v + 1}`), take(3));
  newsSource = interval(3500).pipe(map(v => `News video #${v + 1}`), take(4));
  finalSource = merge(this.techSource, this.comedySource, this.newsSource);


  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    this.finalSource.subscribe((res) => {
      this.designUtilityService.addToList(res, 'mergeList')
    })
  }
}
