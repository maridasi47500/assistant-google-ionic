import { Injectable } from '@angular/core';
import { Search } from '../shared/Search';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})

export class SearchService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  // Create
  createSearch(apt: Search) {
    return this.bookingListRef.push({
      cat_id: apt.cat_id,
      content: apt.content,
    });
  }

  // Get Single
  getSearch(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }

  // Get List
  getSearchList() {
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef;
  }

  // Update
  updateSearch(id: any, apt: Search) {
    return this.bookingRef.update({
      cat_id: apt.cat_id,
      content: apt.content,
    });
  }

  // Delete
  deleteSearch(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    this.bookingRef.remove();
  }
}
