import { ActivatedRoute } from '@angular/router';
import { EquipmentService } from './../../_services/equipment.service';
import { Equipment } from './../../_models/equipment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {
  equipmentList: Equipment[];
  @Output() selectedEquipment: EventEmitter<Equipment> = new EventEmitter();

  constructor(
    private equipmentService: EquipmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.equipmentService.getAllEquipment()
      .then(eqList => this.equipmentList = eqList);

      // create a subscription to watch for change in route params
      this.route.params.subscribe(event => {
        this.equipmentService
          .getOneEquipment(this.route.snapshot.params['id'])
          .then(equipment => {
            this.selectedEquipment.emit(equipment);
      })

      });
  }

} // end class
