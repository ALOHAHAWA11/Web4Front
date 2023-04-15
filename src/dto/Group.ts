import {Student} from "./Student";

export class Group {
  constructor(private _name: string, private _students: Student[]) {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get students(): Student[] {
    return this._students;
  }

  set students(value: Student[]) {
    this._students = value;
  }
}
