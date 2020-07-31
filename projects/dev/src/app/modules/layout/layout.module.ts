import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "~/dev/app/shared/shared.module";
import { AsideModule } from "~/dev/app/modules/layout/aside/aside.module";
import { LayoutComponent } from "~/dev/app/modules/layout/layout.component";
import { LAYOUT_SERVICE_TOKEN } from "~/dev/app/modules/layout/service/token";
import { LayoutService } from "~/dev/app/modules/layout/service/layout.service";

@NgModule({
  imports: [SharedModule, RouterModule, AsideModule],
  declarations: [LayoutComponent],
  providers: [{ provide: LAYOUT_SERVICE_TOKEN, useClass: LayoutService }],
})
export class LayoutModule {}
