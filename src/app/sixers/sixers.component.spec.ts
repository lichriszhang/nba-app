import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixersComponent } from './sixers.component';

describe('SixersComponent', () => {
  let component: SixersComponent;
  let fixture: ComponentFixture<SixersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
