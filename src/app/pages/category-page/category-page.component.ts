import Category from "src/app/models/category.model";
import { DataStorageService } from 'src/app/service/data-storage/data-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { CategoryComponentComponent } from 'src/app/components/category-component/category-component.component';
import UserDetails from 'src/app/models/user-details.model';
import { local } from 'd3-selection';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  @Input() type: string = "";
  @Input() category!: Category;
  userDetails: UserDetails;
  categories: Array<Category>;
  
  constructor(private dataStorageService: DataStorageService) {  
    this.category = new Category(0, 0, "", "", "");
    this.type = "";
    this.categories=[];
    this.userDetails= localStorage.UserDetails;
  }
  ngOnInit(): void {

    console.log(localStorage.UserDetails.id);
    this.dataStorageService.getCategories(localStorage.UserDetails, this.type).subscribe(
      async (categories) => {
        console.log("this details id"+this.userDetails.id)
        console.log("this ls id"+localStorage.UserDetails.id)
        this.categories = categories;
        
      }

      );

  }

  ngOnChanges(): void {

    console.log(localStorage.UserDetails.id);
    this.dataStorageService.getCategories(localStorage.UserDetails, this.type).subscribe(
      (categories) => {
        console.log("this details id"+this.userDetails.id)
        console.log("this ls id"+localStorage.UserDetails.id)
        this.categories = categories;
      }
    );

  }

}
