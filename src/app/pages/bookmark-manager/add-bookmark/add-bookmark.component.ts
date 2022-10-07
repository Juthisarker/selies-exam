import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { CommonService } from 'src/app/shared/services/common.service';
@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  categoryList =["Category a","category b","category c"];
  // form!: FormGroup; 
  // bookMarkForm: FormGroup;
  bookmarks: any = [];
  existing : any = [];
  categoryForm = this.fb.group({
    new_category: new FormControl('', [Validators.required]),
  });
 urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  bookMarkForm = this.fb.group({
    title: new FormControl('', [Validators.maxLength(30), Validators.required]),
    url: new FormControl('', [Validators.required,Validators.pattern(this.urlRegex)]),
    category: new FormControl('', [Validators.required,]),
     categories: this.fb.array([])
  })
  constructor(private fb : FormBuilder,
    private commonService: CommonService,
    private dialogRef : MatDialogRef<AddBookmarkComponent>,
    ) { }

  ngOnInit(): void {
    // this.bookMarkForm = this.fb.group({
    //       Title : ['',Validators.required],
    //       Url : ['',Validators.required],
    // //      Category : ['',Validators.required],
    //       categories : this.fb.array([]),
    // });
   this.bookmarks =  JSON.parse(localStorage.getItem('bookmark_list' || '[]'));
  }
  addBookMark(){
    const object = this.bookMarkForm.value;
    object.id = Math.floor( Math.random() * (700 - 10) + 10);
     if(Array.isArray(this.bookmarks)){
      //  this.bookmarks = [];
       this.bookmarks.push(object);
       localStorage.setItem('bookmark_list', JSON.stringify(this.bookmarks));
       this.commonService.showSuccessMsg(`Bookmark added successfully!!`);
       this.dialogRef.close('save');
       }
else{
    this.bookmarks.push(object);
    localStorage.setItem('bookmark_list', JSON.stringify(this.bookmarks));
    this.commonService.showSuccessMsg(`Bookmark added successfully!!`);
    this.dialogRef.close('save');
}

    }
  get categories() {
    return this.bookMarkForm.controls["categories"] as FormArray;
  }

  addNewCategory(){
    this.categories.push(this.categoryForm);
  }

  selectCategory(){
    if (this.bookMarkForm.get("category").value) {
    }
  }
}
