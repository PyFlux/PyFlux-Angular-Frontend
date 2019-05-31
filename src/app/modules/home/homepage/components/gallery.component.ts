import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
import { NoticeBoardService } from '../../../events/noticeboard/noticeboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GalleryImageuploadService } from '../../../events/galleryimageupload/galleryimageupload.service';



@Component({
    selector: 'app-homepage-gallery',
    templateUrl: '../pages/gallery.component.html'
  


})
export class GalleryComponent implements OnInit {
    widgets = [];
    widgets_data = {};
    loading = false;
    gallery: any = [];

    constructor(
        private homeService: HomepageService,
        private galleryservice: GalleryImageuploadService,
        private route: ActivatedRoute,


    ) { }
    // public func() { 
  
    //     // Original string containing whitespace 
    //     var str = "GeeksforGeeks      "; 
      
    //     // Trimmed string 
    //     var st = str.trimLeft(); 
    //     document.write(st);   
    // } 

    ngOnInit() {
       
        this.loading = true;

        this.galleryservice.getGalleryImages()
            .subscribe(data => {
                this.gallery = data;
                
                
            

            });

    }

}
