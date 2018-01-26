import { Equipment } from './../_models/equipment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  title = 'Equipment List';
  selectedEquipment: Equipment;

  constructor() { }

  ngOnInit() {
  }

  onEquipmentSelected(equipment) {
    this.selectedEquipment = equipment;
    console.log('selected: ', equipment)
  }

}
