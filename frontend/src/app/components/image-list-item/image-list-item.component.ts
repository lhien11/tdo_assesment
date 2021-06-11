import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageListItem } from '../../models/image-list-item';
@Component({
  selector: 'app-image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.scss']
})
export class ImageListItemComponent implements OnInit {

  constructor() { }
  
  @Input()
  image?: ImageListItem;

  @Output()
  click = new EventEmitter<void>();

  onImageListItemClick() {
    console.log("i was clicked on: ");
    this.click.emit();
  }






  ngOnInit(): void {
  }

}
