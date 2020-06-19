import { Component, OnInit, Input } from '@angular/core';
import { Information } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-informations-list',
  templateUrl: './informations-list.component.html',
  styleUrls: ['./informations-list.component.css']
})
export class InformationsListComponent implements OnInit {

  @Input() public informations: Information[]; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
