import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: any[];
  user_id: string;
  constructor(private data: DataService, private activatedRoute: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.user_id = params['id'];
    });
    this.getAlbums(this.user_id);
  }

  backClicked() {
    this._location.back();
  }

  getAlbums(id) {
    this.data.getAlbums(id)
      .subscribe(
        data => {
          this.albums = data;
        },
        err => {
          console.log('all inquiries err', err);
        }
      )
  }
}
