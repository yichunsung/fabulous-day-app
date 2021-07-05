import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

class MemberData {
	name: string;
	email: string;
	role: string;
}

interface Organization {
  id: number;
  company_name: string;
  building_date: string;
  address: string;
}

interface APIReturn {
  status: number;
  message: string;
  data: Organization[];
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  private apiUrl: string = 'https://fable-api.elk-tree.site/api/organizations';

  public membersList: MemberData[] = [
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

  public organizationData: Organization = {
    id: 0,
    company_name: '',
    building_date: '',
    address: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
	 console.log('MembersPage');
   this.getDataFromAPI().subscribe((res) => {
    this.organizationData = res.data[0];
    console.log(res.data[0]);
   });
  }

  getDataFromAPI(): Observable<APIReturn> {
    console.log(this.apiUrl);
    return this.http.get<APIReturn>(this.apiUrl);
  }
}
