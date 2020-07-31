import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadStreamComponent } from './read-stream/read-stream.component';
import { BlobImageComponent } from './blob-image/blob-image.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'read-stream',
        component: ReadStreamComponent,
      },
      {
        path: 'blob-image',
        component: BlobImageComponent,
      },
      {
        path: '**',
        component: ReadStreamComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
