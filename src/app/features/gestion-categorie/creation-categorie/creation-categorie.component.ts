import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creation-categorie',
  templateUrl: './creation-categorie.component.html',
  styleUrls: ['./creation-categorie.component.css']
})
export class CreationCategorieComponent {
  closeResult: string='';
  constructor(
     private modalService: NgbModal
  ) { }
 

  openModalDialogCustomClass(content:any) {
		this.modalService.open(content, {size: 'lg' });
	}

}
