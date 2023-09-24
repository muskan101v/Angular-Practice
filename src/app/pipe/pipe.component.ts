import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service.service';
import { product } from '../model';
import { FilterPipe } from '../pipes/filter.pipe';
import { SortingPipe } from '../pipes/sorting.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, FilterPipe, SortingPipe],
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  constructor(private _service: ServiceService) {}

  product_data: product[] = [];

  search_value = '';
  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this._service.getProduct().subscribe((res: any) => {
      this.product_data = res;
    });
  }

  getId(index: number, item: product) {
    return item.id;
  }

  onInput(event: any) {
    this.search_value = event?.target?.value;
  }
}
