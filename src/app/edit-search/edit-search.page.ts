import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SearchService } from './../shared/search.service';

@Component({
  selector: 'app-edit-search',
  templateUrl: './edit-search.page.html',
  styleUrls: ['./edit-search.page.scss'],
})

export class EditSearchPage implements OnInit {
  updateSearchForm: FormGroup;
  id: any;

  constructor(
    private aptService: SearchService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getSearch(this.id).valueChanges().subscribe(res => {
      this.updateSearchForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateSearchForm = this.fb.group({
      content: [''],
      cat_id: ['']
    })
    console.log(this.updateSearchForm.value)
  }

  updateForm() {
    this.aptService.updateSearch(this.id, this.updateSearchForm.value)
      .then(() => {
        this.router.navigate(['/make-search/'+this.id]);
      })
      .catch(error => console.log(error));
  }
}
