import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {
  getEmployee: any[] = [];
  departments: any[] = [];
  employeeObj: any = {
    "fname": "",
    "lname": "",
    "deptId": "",
    "gender": "",
    "email": "",
    "phone": ""
  }
  isListView: boolean = true;
  constructor(private http: HttpClient) {


  }

  ngOnInit(): void {
    this.loadDepartment();
    this.loadWmployee();
  }
  loadDepartment() {
    this.http.get("assets/department.json").subscribe((res: any) => {
      debugger;
      this.departments = res.data;
    })
  }
  loadWmployee() {
    this.http.get("assets/getEmployee.json").subscribe((res: any) => {
      debugger;
      this.getEmployee = res.data;
    })
  }

onCreateEmp(){
  debugger;
  this.http.post("assets/postEmployee.json", this.employeeObj).subscribe((res: any) => {
    alert(res.message);
    this.loadWmployee();
  });
}
onEdit(item:any){
  debugger;
  this.employeeObj = item;
  this.isListView = false;
  
}
onDelete(item:any){
  debugger;
  this.http.get("assets/deleteEmployee.json", item).subscribe((res:any)=>{
      
    alert(res.message);
    this.loadWmployee();
  }
)
}
}
