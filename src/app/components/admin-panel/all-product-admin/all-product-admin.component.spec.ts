import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductAdminComponent } from './all-product-admin.component';

describe('AllProductAdminComponent', () => {
  let component: AllProductAdminComponent;
  let fixture: ComponentFixture<AllProductAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProductAdminComponent]
    });
    fixture = TestBed.createComponent(AllProductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
