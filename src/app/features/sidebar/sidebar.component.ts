import { Component,  OnInit , EventEmitter, Input, Output} from '@angular/core';
import {ProfileService}  from 'src/app/services/profile.service';
import {Profile} from 'src/app/models/profile.model';
import{Menu} from 'src/app/models/profile.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
 
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

    ngOnInit() {
       
    }
}


