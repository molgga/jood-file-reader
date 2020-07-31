import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "~/dev/app/shared/shared.module";
import { AsideComponent } from "./aside.component";
import { MenuGroupComponent } from "./menu-group/menu-group.component";
import { MenuListComponent } from "./menu-list/menu-list.component";
import { MenuItemComponent } from "./menu-item/menu-item.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    AsideComponent,
    MenuGroupComponent,
    MenuListComponent,
    MenuItemComponent,
  ],
  exports: [AsideComponent],
})
export class AsideModule {}
