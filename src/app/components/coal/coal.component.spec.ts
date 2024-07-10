import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COALComponent } from './coal.component';

describe('COALComponent', () => {
  let component: COALComponent;
  let fixture: ComponentFixture<COALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [COALComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(COALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
