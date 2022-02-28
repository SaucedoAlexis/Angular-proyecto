import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenEncabezadoComponent } from './imagen-encabezado.component';

describe('ImagenEncabezadoComponent', () => {
  let component: ImagenEncabezadoComponent;
  let fixture: ComponentFixture<ImagenEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenEncabezadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
