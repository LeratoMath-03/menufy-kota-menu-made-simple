import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBrowse } from './menu-browse';

describe('MenuBrowse', () => {
  let component: MenuBrowse;
  let fixture: ComponentFixture<MenuBrowse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBrowse],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuBrowse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
