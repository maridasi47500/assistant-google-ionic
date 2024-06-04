import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeSearchPage } from './make-search.page';

describe('MakeSearchPage', () => {
  let component: MakeSearchPage;
  let fixture: ComponentFixture<MakeSearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
