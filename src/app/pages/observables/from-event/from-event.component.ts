import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addVideoBtn') addVideoBtn!: ElementRef;


  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    let counter = 1;
    fromEvent(this.addVideoBtn.nativeElement, 'click').subscribe((res) => {
      const countValue = `Video ${counter++}`;
      this.designUtilityService.addToList(countValue,'videoList1');
      this.designUtilityService.addToList(countValue,'videoList2');
    })
  }

}
