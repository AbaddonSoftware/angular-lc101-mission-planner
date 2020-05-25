import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  itemBeingEdited: object = null;
  equipment: object[] = [{ name: "Habitat Dome" },
  { name: "Drones" },
  { name: "Food containers" },
  { name: "Oxygen tanks" }];

  constructor() { }

  ngOnInit() {
  }
  add(itemName: string) {
    if (!RegExp('^[ ]*$').test(itemName)) {
      this.equipment.push({ name: itemName });
    }
    else {
      alert("Entries consisting of only whitespace not permitted.")
    }

  }

  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: object) {
    this.itemBeingEdited = item;
  }

  save(itemName: string, item: object) {
    item["name"] = itemName;
    this.itemBeingEdited = null;
  }
}
