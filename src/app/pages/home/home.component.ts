import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products = [1,2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit(): void {
  }

}
