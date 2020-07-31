import { Component, OnInit, ChangeDetectorRef, Inject } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { LAYOUT_SERVICE_TOKEN } from "~/dev/app/modules/layout/service/token";
import { LayoutService } from "~/dev/app/modules/layout/service/layout.service";
import { IMenu } from "~/dev/app/modules/layout/model/menu.model";
import { IPublish } from "~/dev/app/modules/layout/model/publish.model";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  constructor(
    @Inject(LAYOUT_SERVICE_TOKEN) private layoutService: LayoutService,
    private changeDetectorRef: ChangeDetectorRef,
    private mediaMatcher: MediaMatcher
  ) {
    this._handleMediaQuery = () => changeDetectorRef.detectChanges();
    this.mobileMediaQuery = mediaMatcher.matchMedia("(max-width: 600px)");
    this.mobileMediaQuery.addListener(this._handleMediaQuery);
    this.menuList = this.layoutService.getMenuList();
    this.publishList = this.layoutService.getPublishList();
  }

  menuList: IMenu[] = [];
  publishList: IPublish[] = [];
  mobileMediaQuery: MediaQueryList;

  private _handleMediaQuery: () => void;

  get appTitle() {
    return this.layoutService.appTitle;
  }

  get isMobile() {
    return this.mobileMediaQuery.matches;
  }
  get fixedInViewport(): boolean {
    return true; // !this.isMobile;
  }
  get fixedTopGap(): number {
    return this.isMobile ? 56 : 64;
  }
  get initOpened(): boolean {
    return !this.isMobile;
  }
  get drawerMode(): string {
    return this.isMobile ? "over" : "side";
  }

  onOpenToPublish(publish: IPublish) {
    const { url } = publish;
    if (url) window.open(url);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.mobileMediaQuery.removeListener(this._handleMediaQuery);
  }
}
