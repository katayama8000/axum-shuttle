import { Component, OnInit } from '@angular/core';
import { MEMBER } from 'src/app/type/member.model';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
})
export class MemberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  member: MEMBER[] = [
    {
      name: 'John',
      userId: 1,
      position: '役員',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
    },
    {
      name: 'Mary',
      userId: 2,
      position: 'リーダー',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
    },
    {
      name: 'Mike',
      userId: 3,
      position: '一般',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
    },
    {
      name: 'Jane',
      userId: 4,
      position: '一般',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
    },
  ];

  onClick(m: MEMBER): void {
    console.log(m);
  }

  toggleIsBreak(member: MEMBER, $event: any): void {
    member.isBreak = !member.isBreak;
    $event.stopPropagation();
    //$event.preventDefault();
  }

  toggleStatus(member: MEMBER): void {
    if (member.status.status === '出社') {
      member.status.status = '在宅';
      member.status.bgColor = 'blue';
    } else if (member.status.status === '在宅') {
      member.status.status = '退社';
      member.status.bgColor = 'red';
    } else {
      member.status.status = '出社';
      member.status.bgColor = 'green';
    }
  }
}
