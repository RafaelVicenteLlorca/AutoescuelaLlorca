import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHistorialComponent } from './test-historial.component';

describe('TestHistorialComponent', () => {
  let component: TestHistorialComponent;
  let fixture: ComponentFixture<TestHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHistorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
