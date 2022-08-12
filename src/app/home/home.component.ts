import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name!: string;
  purpose!: string;
  detail!: string;
  payfor!: string;
  ammount!: number;
  in!: string;
  out!: string;

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
