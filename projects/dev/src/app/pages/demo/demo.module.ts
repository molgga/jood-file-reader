import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '~/dev/app/pages/demo/demo.routing';
import { SharedModule } from '~/dev/app/shared/shared.module';
import { ExampleCommonModule } from '~/dev/app/modules/example/common/common.module';
import { ReadStreamComponent } from './read-stream/read-stream.component';
import { BlobImageComponent } from './blob-image/blob-image.component';

@NgModule({
  imports: [CommonModule, RoutingModule, SharedModule, ExampleCommonModule],
  declarations: [ReadStreamComponent, BlobImageComponent],
})
export class PageModule {}
