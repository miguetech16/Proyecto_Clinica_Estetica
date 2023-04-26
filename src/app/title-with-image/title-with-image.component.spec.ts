import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleWithImageComponent } from './title-with-image.component';

describe('TitleWithImageComponent', () => {
  let component: TitleWithImageComponent;
  let fixture: ComponentFixture<TitleWithImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleWithImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
