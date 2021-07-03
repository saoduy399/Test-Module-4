import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaventReadedComponent } from './havent-readed.component';

describe('HaventReadedComponent', () => {
  let component: HaventReadedComponent;
  let fixture: ComponentFixture<HaventReadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaventReadedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaventReadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
