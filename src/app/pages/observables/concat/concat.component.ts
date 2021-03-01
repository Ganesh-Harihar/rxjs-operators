import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  techSource = interval(1000).pipe(map(v => `Tech video #${v + 1}`), take(5));
  comedySource = interval(1000).pipe(map(v => `Comedy video #${v + 1}`), take(3));
  newsSource = interval(1000).pipe(map(v => `News video #${v + 1}`), take(4));
  finalSource = concat(this.techSource, this.comedySource, this.newsSource);


  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    this.finalSource.subscribe((res) => {
      this.designUtilityService.addToList(res,'concatList')
    })
  }

}
