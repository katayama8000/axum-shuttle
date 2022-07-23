import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  employeeNumber!: number;
  password!: number;

  async createUser() {
    const url = 'http://localhost:3000/users';
    const data = {
      employeeNumber: this.employeeNumber,
      password: this.password,
    };
    const userData = await axios.post(url, data);
    console.log(userData);

  }
}
