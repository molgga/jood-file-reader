import { IMenu } from "~/dev/app/modules/layout/model/menu.model";
import { IPublish } from "~/dev/app/modules/layout/model/publish.model";

export interface ILayoutService {
  appTitle: string;
  getPublishList(): IPublish[];
  getMenuList(): IMenu[];
}
