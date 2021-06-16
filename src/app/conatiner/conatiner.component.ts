import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-conatiner',
  templateUrl: './conatiner.component.html',
  styleUrls: ['./conatiner.component.css']
})
export class ConatinerComponent implements OnInit {

  items: Item[] = [];
  editItem!: Item;
  editItemIndex!: number;
  constructor() { }

  ngOnInit(): void {
  }
  onCreate(item: Item) {
    this.items.push(item);
  }
  onEditComplete(item: Item) {
    this.items[this.editItemIndex] = item;
  }
  onEdit(event: any) {
    let {index, item} = event;

    this.editItem = item;
    this.editItemIndex = index;
  }
  onDelete(itemIndex: number) {
    this.items = this.items.filter((e: Item, index) => { return index !== itemIndex ?   e : null; })
  }
}
