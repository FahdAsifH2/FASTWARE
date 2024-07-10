import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalLogicComponent } from './digital-logic.component';

describe('DigitalLogicComponent', () => {
  let component: DigitalLogicComponent;
  let fixture: ComponentFixture<DigitalLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalLogicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
