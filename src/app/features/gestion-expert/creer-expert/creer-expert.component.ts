import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creer-expert',
  templateUrl: './creer-expert.component.html',
  styleUrls: ['./creer-expert.component.css']
})
export class CreerExpertComponent {
  closeResult: string='';
  constructor(
     private modalService: NgbModal
  ) { }
 

  openModalDialogCustomClass(content:any) {
		this.modalService.open(content, {size: 'lg' });
	}


}
