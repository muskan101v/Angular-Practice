import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  colorList = ['Blue', 'Green', 'Purple', 'Brown'];
  dropdown = false;

  defaultStatement: string = '';

  color = '';

  onSelect(event: any) {
    console.log(event.target.value);
  }
}
