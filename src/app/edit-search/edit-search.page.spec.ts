import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSearchPage } from './edit-search.page';

describe('EditSearchPage', () => {
  let component: EditSearchPage;
  let fixture: ComponentFixture<EditSearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
