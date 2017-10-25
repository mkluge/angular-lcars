import { TestBed, inject } from '@angular/core/testing';

import { EquipmentServiceService } from './equipment-service.service';

describe('EquipmentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipmentServiceService]
    });
  });

  it('should be created', inject([EquipmentServiceService], (service: EquipmentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
