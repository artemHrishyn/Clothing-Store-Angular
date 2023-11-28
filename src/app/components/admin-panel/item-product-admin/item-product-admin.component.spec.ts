import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProductAdminComponent } from './item-product-admin.component';

describe('ItemProductAdminComponent', () => {
  let component: ItemProductAdminComponent;
  let fixture: ComponentFixture<ItemProductAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemProductAdminComponent]
    });
    fixture = TestBed.createComponent(ItemProductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
