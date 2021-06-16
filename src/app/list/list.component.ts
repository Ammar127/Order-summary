import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: Item[] = [];
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  get isFooter() { return this.items.length > 0 }
  onDelete(index: number) {
    this.delete.emit(index);
  }
  onEdit(index: number, item: Item) {
    this.edit.emit({index, item});
  }
}
