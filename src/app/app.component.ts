import { Component } from '@angular/core';
import { Article } from './article/article.model'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[]; 
  constructor() {
    this.articles = [
    new Article('Jednokrevetna soba', '300'),
    new Article('Dvokrevetna soba', '500'),
    new Article('Lux soba',' 1000'),
    ];
    

   
}

addArticle(title: HTMLInputElement, price: HTMLInputElement): boolean {
  console.log(`Adding article title: ${title.value} and price: ${price.value}`);
  this.articles.push(new Article(title.value, price.value));
  title.value = '';
  price.value = '';
  return false;
  }
}


  