import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  users = [
    {
      age: 10, name: 'Ganesh',
      job: {
        role: 'Developer'
      }
    },
    {
      age: 20, name: 'Nikhil',
      job: {
        role: 'Tester'
      }
    },
    {
      age: 30, name: 'Amit',
      job: {
        role: 'Designer'
      }
    },
  ]

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    /**
     * Ex - 01 normal object
     */
    from(this.users).pipe(pluck('name')).subscribe((res) => {
      this.designUtilityService.addToList(res, 'pluckListContainerNormalObejct');
    })

    /**
     * EX - 02 nested object
     */
    from(this.users).pipe(pluck('job','role')).subscribe((res) => {
      console.log('res', res);
      this.designUtilityService.addToList(res, 'pluckListContainerNestedObject');
    })
  }

}
