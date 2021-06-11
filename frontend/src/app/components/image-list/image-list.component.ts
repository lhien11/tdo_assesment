import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ImageListItem } from 'src/app/models/image-list-item';

import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  private _layoutGap = 5;

  @Input() 
  images: ImageListItem[] = [];

  @Output()
  click = new EventEmitter<ImageListItem>();

  @Input()
  get layoutGap() {
    return this._layoutGap;
  }

  set layoutGap(value: number) {
    // default is 5
    this._layoutGap = (value !== undefined) ? coerceNumberProperty(value) : 5;
  }

  onImageListItemClick(imageListItem: ImageListItem) {
    this.click.emit();
  }



  constructor() { }

  ngOnInit(): void {
    console.log("oninit: ", this.images);
  }

}
