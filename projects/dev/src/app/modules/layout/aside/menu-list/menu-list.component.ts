import { Component, OnInit, Input } from "@angular/core";
import { IMenu } from "../../model/menu.model";

@Component({
  selector: "menu-list",
  templateUrl: "./menu-list.component.html",
  styleUrls: ["./menu-list.component.scss"],
})
export class MenuListComponent implements OnInit {
  constructor() {}

  @Input()
  menuList: IMenu[] = [];

  ngOnInit() {}
}
