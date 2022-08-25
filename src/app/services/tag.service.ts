import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../common/Tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags: Tag =
  {id: 1, parentId: null, label: "Location", isExpanded: false, children: [
    {id: 2, parentId: 1, label: "Africa", isExpanded: false, children: [
      {id: 5, parentId: 2, label: "Africa2", isExpanded: false, children: null}
    ]},
    {id: 3, parentId: 1, label: "America", isExpanded: false, children: null},
    {id: 4, parentId: 1, label: "Europe", isExpanded: false, children: [
      {id: 4, parentId: 1, label: "Germany", isExpanded: false, children: [
        {id: 6, parentId: 4, label: "Germany1", isExpanded: false, children: null},
        {id: 7, parentId: 4, label: "Germany2", isExpanded: false, children: null}
      ]},
      {id: 4, parentId: 1, label: "Spain", isExpanded: false, children: null},
      {id: 4, parentId: 1, label: "France", isExpanded: false, children: null}
    ]}
  ]};
  level: number = 3;

  constructor(private http: HttpClient) { }

  getTags(): Tag {
    // return this.http.get('https://dummyData/tags');
    return this.tags;
  }

  getLevel() {
    return this.level;
  }

  updateTagLabel(tag: Tag, newLabel: string): void {
    tag.label = newLabel;
  }
}
