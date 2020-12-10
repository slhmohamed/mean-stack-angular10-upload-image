import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from 'src/app/services/api.service';
import {Gallery} from 'src/app/models/gallery';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  gallery: Gallery = { _id: '', imageUrl: '', imageTitle: '', imageDesc: '', uploaded: null };
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getGalleryDetails(this.route.snapshot.paramMap.get('id'));
  }

  getGalleryDetails(id: string): void {
    this.api.getGalleryById(id)
      .subscribe((data: any) => {
        this.gallery = data;
        console.log(this.gallery);
        this.isLoadingResults = false;
      });
  }

}