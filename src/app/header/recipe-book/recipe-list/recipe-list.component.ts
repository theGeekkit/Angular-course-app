import { Component, OnInit } from '@angular/core';

import { recipe } from 'src/app/header/recipe-book/recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: recipe[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
