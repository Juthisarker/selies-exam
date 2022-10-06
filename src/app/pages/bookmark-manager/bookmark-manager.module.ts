import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddBookmarkComponent } from '../bookmark-manager/add-bookmark/add-bookmark.component';
import { BookmarkListComponent } from '../bookmark-manager/bookmark-list/bookmark-list.component';
import { BoorkmarkDetailsComponent } from './boorkmark-details/boorkmark-details.component';
export const routes = [
  { path: 'book-marklist', component: BookmarkListComponent, pathMatch: 'full' },
  { path: 'details/:id', component: BoorkmarkDetailsComponent, pathMatch: 'full' },
];
@NgModule({
  declarations: [AddBookmarkComponent, BookmarkListComponent, BoorkmarkDetailsComponent],
    imports: [RouterModule.forChild(routes), SharedModule],
})
export class BookmarkManagerModule { }
