import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  @Input() item!: Item;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete() {
    this.delete.emit();
  }
  onEdit() {
    this.edit.emit();
  }
}
