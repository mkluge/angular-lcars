
import { Equipment } from '../../_models/equipment';
import { EquipmentService } from '../../_services/equipment.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-equipment',
  templateUrl: './new-equipment.component.html',
  styleUrls: ['./new-equipment.component.css']
})
export class NewEquipmentComponent implements OnInit {
  @ViewChild('eqForm') equipmentForm: NgForm;
  public equipment: Equipment;

  constructor(private equipmentService: EquipmentService, private router: Router) { }

  ngOnInit() {
    this.equipment = {
      id: 0,
      name: '',
      imageUrl: '',
      description: ''
    };
  }

  onSubmit(form) {
    if (form.valid) {
      this.equipment = form.value;
      this.equipmentService.saveNewEquipment(this.equipment);
      this.router.navigate(['/equipment', this.equipment.id]);
    }
  }

} // end class
