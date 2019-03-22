import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Params, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: any[];
  constructor(private data: DataService, private activatedRoute: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.photos = params['id'];
    });
    this.getPhotos(this.photos);
  }

  backClicked() {
    this._location.back();
  }

  getPhotos(id) {
    this.data.getPhotos(id)
      .subscribe(
        data => {
          this.photos = data;
        },
        err => {
          console.log('all inquiries err', err);
        }
      )
  }
}
