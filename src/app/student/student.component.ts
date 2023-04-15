import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Student} from "../../dto/Student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private _id?: number;
  private _subscription: Subscription = new Subscription();
  private _students_6402?: Student[] = [new Student("Student_1_6402", new Date(2001, 10, 14), 322),
  new Student("Student_2_6402", new Date(2001,4,2), 133),
  new Student("Student_3_6402", new Date(2001, 1,3), 423)]

  private _students_6403?: Student[] = [new Student("Student_1_6403", new Date(2001, 10, 14), 322),
    new Student("Student_2_6403", new Date(2001,4,2), 133),
    new Student("Student_3_6403", new Date(2001, 1,3), 423)]

  private _students_6404?: Student[] = [new Student("Student_1_6404", new Date(2001, 10, 14), 322),
    new Student("Student_2_6404", new Date(2001,4,2), 133),
    new Student("Student_3_6404", new Date(2001, 1,3), 423)]

  constructor(private _activatedRoute: ActivatedRoute) {
  }


  get id(): number {
    return this._id!;
  }

  set id(value: number) {
    this._id = value;
  }

  get students() {
    if (this._id == 6402) {
      return this._students_6402!
    }
    else if (this._id == 6403) {
      return this._students_6403!
    }
    else if (this._id == 6404) {
      return  this._students_6404!
    }
    else return null
  }
  ngOnInit() {
    this._subscription = this._activatedRoute.params.subscribe(params => this._id = params['id']);
  }
}
