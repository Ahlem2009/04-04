

import { Component } from '@angular/core';



import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-list-doc',
  templateUrl: './list-doc.component.html',
  styleUrls: ['./list-doc.component.css'],
 
})
export class ListDocComponent {
  item1: Article[] = [];
  page = 4; // Numéro de page actuel
  pageSize = 3; // Nombre d'éléments par page



  constructor(
    private service1: ArticleService,
    
  ) {

   }

  ngOnInit() {

    this.GetArticle();
    this.refreshData();
  
  }
  
  GetArticle() {
    this.service1.getArticles().subscribe((allData) => {
      this.item1 = allData;
      console.log(this.item1);

    });
  }
  refreshData() {
    // Utilisez la méthode slice() pour extraire les éléments de la page actuelle
    
    this.item1 = this.item1.slice(	(this.page - 1) * this.pageSize,
    (this.page - 1) * this.pageSize + this.pageSize,);
}

}


