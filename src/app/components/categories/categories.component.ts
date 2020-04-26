import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] = [
    Category.MACBOOKS,
    Category.IMACS,
    Category.IPADS,
    Category.IPHONES,
    Category.ACCESSORIES
  ];


  constructor(private observableService: ObservableService) { }

  ngOnInit(): void {
  }

  handleClick(category: Category) {
    this.observableService.changeCategory(category);
  }
}
