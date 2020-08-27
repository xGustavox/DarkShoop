import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCategoriesComponent } from './nav-categories.component';

describe('NavCategoriesComponent', () => {
  let component: NavCategoriesComponent;
  let fixture: ComponentFixture<NavCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
