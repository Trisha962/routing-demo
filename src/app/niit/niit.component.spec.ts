import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NIITComponent } from './niit.component';

describe('NIITComponent', () => {
  let component: NIITComponent;
  let fixture: ComponentFixture<NIITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NIITComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NIITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
