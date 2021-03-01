import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineAndWithLatestComponent } from './combine-and-with-latest.component';

describe('CombineAndWithLatestComponent', () => {
  let component: CombineAndWithLatestComponent;
  let fixture: ComponentFixture<CombineAndWithLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineAndWithLatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineAndWithLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
