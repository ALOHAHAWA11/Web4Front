import {Component, DoCheck} from '@angular/core';
import {Group} from "../../dto/Group";
import {Student} from "../../dto/Student";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent{

  private _groups: Group[] = [
    new Group('6402', [new Student("Никита Утёнкин", new Date('2001-10-14'), 322)]),
    new Group('6403', [new Student("Никита Утёнкин", new Date('2001-10-14'), 322)]),
    new Group('6404', [new Student("Никита Утёнкин", new Date('2001-10-14'), 322)])
  ]

  private _count: number = 0
  constructor() {}

  get groups(): Group[] {
    return this._groups;
  }

  set groups(value: Group[]) {
    this._groups = value;
  }
  get_index(name: string): number {
    return this._groups.findIndex(i => i.name === name);
  }

}
