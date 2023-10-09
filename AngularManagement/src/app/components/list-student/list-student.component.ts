import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  // tham so dau vao la service
  constructor(private student:StudentsService){}
  studentData: any=[]

  ngOnInit(): void {
    // student o day chinh la service
    this.student.getAllStudent().subscribe((allData)=>{
      console.log(allData)
      this.studentData=allData
    })
  }

}
