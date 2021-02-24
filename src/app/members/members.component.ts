import { Component, OnInit } from '@angular/core';

class MemberData {
	name: string;
	email: string;
	role: string;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  membersList: MemberData[] = [
    {
      name: 'Roy',
      email: 'ycsung.r@elk-tree.studio',
      role: 'admin'
    },
    {
      name: 'May',
      email: 'may@elk-tree.studio',
      role: 'developer'
    },
    {
      name: 'Lee',
      email: 'lee@elk-tree.studio',
      role: 'developer'
    }
  ];

  constructor() { }

  ngOnInit(): void {
	 console.log('MembersPage')
  }

}
