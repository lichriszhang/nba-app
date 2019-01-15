import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrionComponent } from './warrion.component';

describe('WarrionComponent', () => {
  let component: WarrionComponent;
  let fixture: ComponentFixture<WarrionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
