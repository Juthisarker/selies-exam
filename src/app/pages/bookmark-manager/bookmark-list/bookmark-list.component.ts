import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddBookmarkComponent } from '../add-bookmark/add-bookmark.component';
@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {
totalBookmarks : any=[];
totalCategroy  :any = [];
category : any;
arrayOfCategoryobject :any =[];
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
   this.getBookmarkList();
  }
  getBookmarkList(){
  this.totalBookmarks =JSON.parse(localStorage.getItem('bookmark_list') || '[]');
  console.log("categoryyyyyy total",this.totalBookmarks);
   this.totalBookmarks.map((item:any)=>{
    if(item.category){
      this.totalCategroy.push(item.category);
    }
  });
  // this.totalCategroy.forEach((element: any) => {
  //   this.totalBookmarks.forEach((i:any)=>{
  //        if(element==i.category)
  //        {
  //         console.log("element",element);
          
  //           this.category.categoryName = element;
  //           if(this.arrayOfCategoryobject==null){
  //             this.arrayOfCategoryobject = [];
  //             this.arrayOfCategoryobject.push(element);
  //             this.category.totalOfObject = this.arrayOfCategoryobject;
  //           }
  //           else{
  //             this.arrayOfCategoryobject.push(element);
  //             this.category.totalOfObject = this.arrayOfCategoryobject;
  //           }
         
  //        }
  //   })
  // });
  console.log("this.category",this.category);
  
  console.log("this.totalCategroy",this.totalCategroy);
}
  openBookMarkDialog() {
    this.dialog.open(AddBookmarkComponent, {
      width : '30%'
    }).afterClosed().subscribe(
      val=>{
        if(val=='save'){
          this.getBookmarkList();
        }
      }
    );
  }
}
