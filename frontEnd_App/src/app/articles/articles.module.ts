import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailsComponent,
    LatestArticlesComponent,
    FeaturedArticlesComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ],
/* Exporting the LatestArticlesComponent so that it can be used in other modules. */
  exports:[
    LatestArticlesComponent
  ]
})
export class ArticlesModule { }
