import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartButtonComponent } from './cart-button.component';

describe('CartButtonComponent', () => {
  let component: CartButtonComponent;
  let fixture: ComponentFixture<CartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
