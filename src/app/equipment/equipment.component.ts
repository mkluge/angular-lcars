import { Equipment } from './../_models/equipment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  selectedEquipment: Equipment;

  constructor() { }

  ngOnInit() {
  }

  onEquipmentSelected(equipment) {
    this.selectedEquipment = equipment;
  }

}
