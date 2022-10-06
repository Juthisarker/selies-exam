import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoorkmarkDetailsComponent } from './boorkmark-details.component';

describe('BoorkmarkDetailsComponent', () => {
  let component: BoorkmarkDetailsComponent;
  let fixture: ComponentFixture<BoorkmarkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoorkmarkDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoorkmarkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
