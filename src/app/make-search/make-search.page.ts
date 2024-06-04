import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchService } from './../shared/search.service';
import { Search } from '../shared/Search';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-make-search',
  templateUrl: './make-search.page.html',
  styleUrls: ['./make-search.page.scss'],
})
export class MakeSearchPage implements OnInit {
  searchForm: FormGroup;
  id:any;
  Searchs:any=[];

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    public fb: FormBuilder,
private searchService: SearchService
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    /*this.searchService.getSearch(this.id).valueChanges().subscribe(res => {
      this.searchForm.setValue(res);
    });*/


}

  ngOnInit() {
    this.searchForm = this.fb.group({
      content: [''],
      cat_id: [this.id],
    });
    this.fetchSearchs();
    let searchRes = this.searchService.getSearchList();
    searchRes.snapshotChanges().subscribe((res) => {
      this.Searchs = [];
      res.forEach((item) => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        if (this.id === a["cat_id"]){
        this.Searchs.push(a as Search);
        }
      });
    });
  }
  fetchSearchs() {
    this.searchService
      .getSearchList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }

  deleteSearch(id: any) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.searchService.deleteSearch(id);
    }
  }

  formSubmit() {
    if (!this.searchForm.valid) {
      return false;
    } else {
      return this.searchService
        .createSearch(this.searchForm.value)
        .then((res) => {
          console.log(res);
          //this.router.navigate(['/make-search/'+this.id]);
        })
        .catch((error) => console.log(error));
    }
  }
}
