import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipAndForkjoinComponent } from './zip-and-forkjoin.component';

describe('ZipAndForkjoinComponent', () => {
  let component: ZipAndForkjoinComponent;
  let fixture: ComponentFixture<ZipAndForkjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipAndForkjoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipAndForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
