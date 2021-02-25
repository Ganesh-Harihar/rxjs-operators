import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounctimeComponent } from './debounctime.component';

describe('DebounctimeComponent', () => {
  let component: DebounctimeComponent;
  let fixture: ComponentFixture<DebounctimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounctimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounctimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
