import { Injectable } from "@angular/core";
import { ILayoutService } from "~/dev/app/modules/layout/service/types";

@Injectable({
  providedIn: "root",
})
export class LayoutService implements ILayoutService {
  appTitle = "APP";
  getPublishList() {
    return [];
  }
  getMenuList() {
    return [
      {
        label: "foo",
      },
    ];
  }
}
