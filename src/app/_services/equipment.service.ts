import { EQUIPMENT } from './../_data/equipment.data';
import { Equipment } from './../_models/equipment';
import { Injectable } from '@angular/core';

@Injectable()
export class EquipmentService {
  equipmentList: Equipment[];

  constructor() {
    this.equipmentList = EQUIPMENT;
  }

  getAllEquipment(): Promise<Equipment[]> {
    return Promise.resolve(this.equipmentList);
  }

  getOneEquipment(id:number): Promise<Equipment> {
    let foundEquipment;
    this.equipmentList.forEach(equipment => {
      if (equipment.id == id) {foundEquipment = equipment; }
    });
    return Promise.resolve(foundEquipment);
  }

  getEquipmentListLength() {
    return this.equipmentList.length;
  }

  saveNewEquipment(equipment) {
    const newEquipment = equipment;
    newEquipment.id = this.equipmentList.length + 1;
    console.log('newEquipment: ', newEquipment);
    this.equipmentList.push(newEquipment);
    console.log(this.equipmentList);
  }

} // end class
