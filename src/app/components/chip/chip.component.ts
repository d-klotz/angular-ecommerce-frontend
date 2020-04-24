import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  @Input() value;

  constructor() { }

  ngOnInit(): void {
  }

}
