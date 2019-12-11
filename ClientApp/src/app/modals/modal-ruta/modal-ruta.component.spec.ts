import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRutaComponent } from './modal-ruta.component';

describe('ModalRutaComponent', () => {
  let component: ModalRutaComponent;
  let fixture: ComponentFixture<ModalRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
