import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-boorkmark-details',
  templateUrl: './boorkmark-details.component.html',
  styleUrls: ['./boorkmark-details.component.scss']
})
export class BoorkmarkDetailsComponent implements OnInit {
  bookmarkdId: string;
  bookmark:any = [];
  bookmarkDetails: any;
  category: string;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.bookmarkdId = this.route.snapshot.paramMap.get('id');
    console.log(" this.bookmarkdId", this.bookmarkdId);
    
    this.getBookMarkDetails();
  }
  getBookMarkDetails = () => {
    this.bookmark = JSON.parse(localStorage.getItem('bookmark_list') || '[]');
    if (!this.bookmark.length) {
    }
    this.bookmarkDetails = this.bookmark.filter(
      (cs: any) => cs.id == this.bookmarkdId
    )[0];
    console.log("bookmark detail",this.bookmarkDetails);
    this.category = this.bookmarkDetails.category[0];
  };
 
}
