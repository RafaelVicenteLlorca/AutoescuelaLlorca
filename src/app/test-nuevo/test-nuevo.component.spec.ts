import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNuevoComponent } from './test-nuevo.component';

describe('TestNuevoComponent', () => {
  let component: TestNuevoComponent;
  let fixture: ComponentFixture<TestNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestNuevoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
