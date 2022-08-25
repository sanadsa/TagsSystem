import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/common/Tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() tag: Tag;
  @Input() currentLevel: number;
  level: number;
  label: string;

  constructor(private service: TagService) { }

  ngOnInit(): void {
    this.label = this.tag.label;
    this.level = this.service.getLevel();
  }

  clickTag() {
    if (this.isClickable()) {
      this.tag.isExpanded = !this.tag.isExpanded;
    }
  }

  isClickable(): boolean {
    return this.tag.children && this.level > this.currentLevel
  }

  updateTag(tag: Tag) {
    this.service.updateTagLabel(tag, this.label);
  }

}
