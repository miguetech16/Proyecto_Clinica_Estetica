import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTitleDescriptionComponent } from './image-title-description.component';

describe('ImageTitleDescriptionComponent', () => {
  let component: ImageTitleDescriptionComponent;
  let fixture: ComponentFixture<ImageTitleDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTitleDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTitleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
