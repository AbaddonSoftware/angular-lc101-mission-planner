import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null;
  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];

  constructor() { }

  ngOnInit() {

  }
  add(memberName: string, isFirst: boolean) {
    let nameDoesNotExist: boolean = !this.crew.some((element, index, array) => element["name"] == memberName);
    let nameIsValid = RegExp('^[a-zA-Z]+[ ]*[a-zA-Z ]+$').test(memberName);
    if (nameDoesNotExist && nameIsValid) {
      this.crew.push({ name: memberName, firstMission: isFirst });
    }
    else {
      alert("can't add duplicate or invalid names.");
    }
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }


}
