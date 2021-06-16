import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../item';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Output() create = new EventEmitter();
  @Output() edit = new EventEmitter();

  isEdit = false;

  @Input() set editItem(value: Item) {
    if(this.form && value) {
       this.form.patchValue(value);
       this.isEdit = true;
    }
}
  form!: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }
  onCreate() {
    if(this.form.invalid) {return;}
    this.create.emit(this.form.value);
    this.form.reset();
  }
  onEdit() {
    if(this.form.invalid) {return;}
    this.edit.emit(this.form.value);
    this.form.reset();
    this.isEdit = false;
  }
}
