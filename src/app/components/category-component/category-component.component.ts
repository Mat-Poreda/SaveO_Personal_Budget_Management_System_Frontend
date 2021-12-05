import { Component, Input, OnInit } from '@angular/core';
import Category from 'src/app/models/category.model';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.scss']
})
export class CategoryComponentComponent implements OnInit {

  @Input() category!: Category;
  constructor() { }

  ngOnInit(): void {
  }

}
