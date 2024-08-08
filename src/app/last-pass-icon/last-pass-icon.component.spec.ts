import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPassIconComponent } from './last-pass-icon.component';

describe('LastPassIconComponent', () => {
  let component: LastPassIconComponent;
  let fixture: ComponentFixture<LastPassIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastPassIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastPassIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
