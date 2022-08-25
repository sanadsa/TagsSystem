import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/common/Tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tags-layout',
  templateUrl: './tags-layout.component.html',
  styleUrls: ['./tags-layout.component.scss']
})
export class TagsLayoutComponent {
  tags: Tag;
  level: number;

  constructor(private service: TagService) {
    this.tags = service.getTags();
    this.level = service.getLevel();
  }

}
