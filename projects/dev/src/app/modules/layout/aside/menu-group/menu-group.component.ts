import { Component, OnInit, Input } from "@angular/core";
import { IMenu } from "../../model/menu.model";

@Component({
  selector: "menu-group",
  templateUrl: "./menu-group.component.html",
  styleUrls: ["./menu-group.component.scss"],
})
export class MenuGroupComponent implements OnInit {
  constructor() {}

  @Input()
  menus: IMenu[] = [];

  ngOnInit() {}
}
