import { Component, OnInit, Input } from "@angular/core";
import { IMenu } from "../../model/menu.model";

@Component({
  selector: "menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.scss"],
})
export class MenuItemComponent implements OnInit {
  constructor() {}

  @Input()
  menu: IMenu;

  handleToggleExpand() {
    this.toggleOpened();
  }

  toggleOpened() {
    this.menu.isOpened = !this.menu.isOpened;
  }

  get isOpened() {
    return !this.menu.isOpened;
  }

  get label() {
    return this.menu.label;
  }

  get href() {
    return this.menu.href;
  }

  get queryParams() {
    return this.menu.queryParams || null;
  }

  get children() {
    return this.menu.children;
  }

  get hasChildren() {
    return !!(this.children && this.children.length);
  }

  get activateExactly() {
    // return { exact: this.href === "" };
    return this.href === "/";
  }

  ngOnInit() {}
}
