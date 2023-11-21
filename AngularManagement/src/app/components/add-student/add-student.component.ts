import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  constructor(private student:StudentsService){}
  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
  // duoc goi khi route thay doi
  ngOnInit(): void {
  }
  

  SaveData(){
    //Goi SaveStudentData ttừ service (truyền vào tham số addStudent)
    this.student.SaveStudentData(this.addStudent.value).subscribe()
  }
}
