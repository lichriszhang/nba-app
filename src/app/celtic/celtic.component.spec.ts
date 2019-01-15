import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelticComponent } from './celtic.component';

describe('CelticComponent', () => {
  let component: CelticComponent;
  let fixture: ComponentFixture<CelticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
