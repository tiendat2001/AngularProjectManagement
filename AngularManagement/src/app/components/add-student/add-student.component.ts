import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  constructor(){}
  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',)
  });
  // duoc goi khi route thay doi
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  SaveData(){
    console.log("dat")
  }
}
