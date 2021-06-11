import { Component, OnInit } from '@angular/core';
import { ImageItem } from './models/Image';

import {ImageListCrudService } from 'src/app/services/image-list-crud.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images$: Observable<ImageItem[]>;
  private serverUrl = 'http://localhost:3000/';

  displayedColumns: string[] = ['description', 'path'];
  dataSource = [];

  constructor(private imageListCrudService: ImageListCrudService ){
    this.images$ = this.fetchAllImages();
    this.images$.subscribe(images => {
        this.dataSource = images;
        images.map(img => {
        img.ImagePath = this.serverUrl + img.ImagePath;
      })
    })
  }

  ngOnInit(): void {

  }

  

  fetchAllImages(): Observable<ImageItem[]> {
    return this.imageListCrudService.fetchAll();
  }




  cellClicked(element) {
    element.show = !element.show;
  }
  


}
