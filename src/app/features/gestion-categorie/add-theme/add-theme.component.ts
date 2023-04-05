import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categorie } from 'src/app/models/categorie.model';

import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {
  item: Categorie[] = [];
  closeResult: string='';

  constructor(
    private service: CategorieService, private modalService: NgbModal) { }
 
  ngOnInit() {
  
    this.GetCategorie();
  }
  
  GetCategorie() {
    this.service.getCategorie().subscribe((allData) => {
      this.item = allData;
 
    });}
}
