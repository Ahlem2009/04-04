import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creer-manager',
  templateUrl: './creer-manager.component.html',
  styleUrls: ['./creer-manager.component.css']
})
export class CreerManagerComponent {
  closeResult: string='';
  constructor(
     private modalService: NgbModal
  ) { }
 

  openModalDialogCustomClass(content:any) {
		this.modalService.open(content, {size: 'lg' });
	}


}
