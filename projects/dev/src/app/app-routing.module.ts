import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutModule } from "~/dev/app/modules/layout/layout.module";
import { LayoutComponent } from "~/dev/app/modules/layout/layout.component";
import { LAYOUT_SERVICE_TOKEN } from "~/dev/app/modules/layout/service/token";
import { ExampleLayoutService } from "~/dev/app/service/example-layout.service";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "demo",
        loadChildren: () =>
          import("~/dev/app/pages/demo/demo.module").then((m) => m.PageModule),
      },
      {
        path: "**",
        loadChildren: () =>
          import("~/dev/app/pages/demo/demo.module").then((m) => m.PageModule),
      },
    ],
  },
];

@NgModule({
  imports: [LayoutModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  providers: [
    { provide: LAYOUT_SERVICE_TOKEN, useClass: ExampleLayoutService },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
