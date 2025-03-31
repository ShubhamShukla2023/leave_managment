import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leave-management';
  ngOnInit()
  {
   const employee = {
      empName: 'Shubham Shukla',
      annualLeave: 10,
      sickleave:10,
      unpaidLeave:5
    };
    const emp =  window.localStorage.getItem("employee");
    if (emp === null || emp === undefined || emp === ''){
      window.localStorage.setItem("employee", JSON.stringify(employee));
    }
  }
}
