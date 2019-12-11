import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRutaComponent } from './add-ruta.component';

describe('AddRutaComponent', () => {
  let component: AddRutaComponent;
  let fixture: ComponentFixture<AddRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
