import { Component, OnInit, Input } from "@angular/core";
import { IMenu } from "../model/menu.model";

@Component({
  selector: "layout-aside",
  templateUrl: "./aside.component.html",
  styleUrls: ["./aside.component.scss"],
})
export class AsideComponent implements OnInit {
  constructor() {}

  @Input()
  menuList: IMenu[];

  ngOnInit() {}
}
