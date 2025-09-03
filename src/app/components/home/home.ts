import { Component } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public students: any[] = [];

  constructor(private studentService: StudentService) {

  }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }
}
