import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import { album } from '../model';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./track-by.component.scss'],
})
export class TrackByComponent implements OnInit {
  /* we are using trackBy in ngFor loop to increase performance , first we have to identify unique Field on our array items
  it should be some way to uniquely identify each record
  We then add a method that will take an item, and return the unique identifier.
  Trackby doesn’t suddenly make your code unresponsive. I’ve seen this crop up a little bit where people think if an item is set with the same id, 
  then nothing about that item will update in the table, that’s not true.*/

  constructor(private _service: ServiceService) {}

  albums_data: album[] = [];
  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this._service.getalbums().subscribe((res: any) => {
      this.albums_data = res;
    });
  }

  getAlbumId(index: number, item: album) {
    return item.id;
  }

  updatetable() {
    this.getAlbums();
  }
}
