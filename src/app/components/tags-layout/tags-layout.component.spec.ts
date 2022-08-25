import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsLayoutComponent } from './tags-layout.component';

describe('TagsLayoutComponent', () => {
  let component: TagsLayoutComponent;
  let fixture: ComponentFixture<TagsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
