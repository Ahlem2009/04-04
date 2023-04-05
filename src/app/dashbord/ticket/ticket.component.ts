import { Component, Input } from '@angular/core';
import { ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  item2: ticket[] = [];
  constructor(
    private service: TicketService
  ) { }
 
  ngOnInit() {
  
    this.GetTicket();
  }
  
  GetTicket() {
    this.service.getTicket().subscribe((allData) => {
      this.item2 = allData;
      console.log(this.item2);
 
    });
  }


}
