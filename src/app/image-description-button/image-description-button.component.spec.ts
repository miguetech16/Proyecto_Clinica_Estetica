import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDescriptionButtonComponent } from './image-description-button.component';

describe('ImageDescriptionButtonComponent', () => {
  let component: ImageDescriptionButtonComponent;
  let fixture: ComponentFixture<ImageDescriptionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageDescriptionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDescriptionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
