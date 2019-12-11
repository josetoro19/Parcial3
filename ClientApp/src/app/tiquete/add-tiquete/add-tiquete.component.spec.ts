import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTiqueteComponent } from './add-tiquete.component';

describe('AddTiqueteComponent', () => {
  let component: AddTiqueteComponent;
  let fixture: ComponentFixture<AddTiqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTiqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTiqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
