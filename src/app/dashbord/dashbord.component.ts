import { Component } from '@angular/core';
import { Article } from '../models/article.model';
import { ticket } from '../models/ticket.model';
import { ArticleService } from '../services/article.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  // document
   item1: Article[] = [];
  //ticket
  item2: ticket[] = [];
  constructor(
     private service: TicketService,
     private service1: ArticleService
  ) { }
 
  ngOnInit() {
    //document
     this.GetArticle();
    //ticket
    this.GetTicket();
  }
   GetArticle() {
    this.service1.getArticles().subscribe((allData) => {
      this.item1 = allData;
      console.log(this.item1);
 
     });
   }
  GetTicket() {
    this.service.getTicket().subscribe((allData) => {
      this.item2 = allData;
      console.log(this.item2);
 
    });
  }

}
