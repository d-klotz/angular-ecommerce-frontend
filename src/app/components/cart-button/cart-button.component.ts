import { Component, OnInit, Input } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {
  @Input() modifier?: string;

  faShoppingBag = faShoppingBag;

  constructor() { }

  ngOnInit(): void {
  }

}
