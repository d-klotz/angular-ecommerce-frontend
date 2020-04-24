import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories = ['Macbooks', 'iMacs', 'iPads', 'iPhones', 'Accessories'];

  constructor() { }

  ngOnInit(): void {
  }

}
