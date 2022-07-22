import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //toppings = new FormControl('');

  name!: string;
  purpose!: string;
  detail!: string;
  payfor!: string;

  accountList: string[] = [
    '厚生費',
    '発送費用',
    '交際費',
    '会議費',
    '交通費',
    '通信費',
    '消耗品費',
  ];

  see(s: string) {
    console.log(s);
  }

  inside() {
    console.log('inside');
    console.log(this.name, this.purpose, this.detail);
  }
}
