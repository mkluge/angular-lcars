import { Equipment } from './../../_models/equipment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.css']
})
export class EquipmentDetailsComponent implements OnInit {
  @Input() equipment: Equipment;

  constructor() { }

  ngOnInit() {
  }

} // end class
