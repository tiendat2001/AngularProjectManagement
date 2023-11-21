import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url='http://localhost:3000/students'
  constructor(private http: HttpClient) {}
  // lấy dữ liệu api- dữ liệu thông tin các sinh viên
  getAllStudent(){
    return this.http.get(this.url)
  }
  // gửi dữ liệu lên
  SaveStudentData(data:any){
    return this.http.post(this.url,data)
  }

  deleteStudent(id:any){
    // dùng để nối xâu tạo url hoàn chỉnh - xóa student có id
    return this.http.delete(`${this.url}/${id}`);
  }
}
