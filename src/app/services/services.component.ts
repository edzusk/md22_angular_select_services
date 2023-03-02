import { Component } from '@angular/core';
import { Service } from '../service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] =  [
    {name: "Web Development", value: 300, selected: false},
    {name: "Desig", value: 400, selected: false},
    {name: "Integration", value: 250, selected: false},
    {name: "Training", value: 220, selected: false},
  ]
  selectedServices = 0;
  selectedHero?: Service;

onSelect(service: Service): void {
  service.selected =!service.selected;
  if (service.selected){
    this.selectedServices += service.value;
  }else(
    this.selectedServices -= service.value
  )
  
}
}
