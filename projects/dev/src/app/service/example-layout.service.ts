import { Injectable } from '@angular/core';
import { ILayoutService } from '~/dev/app/modules/layout/service/types';

@Injectable({
  providedIn: 'root',
})
export class ExampleLayoutService implements ILayoutService {
  appTitle = '@jood/file-reader';
  getPublishList() {
    return [
      {
        label: 'Github',
        icon: 'code',
        url: 'https://github.com/molgga/jood-file-reader',
      },
      {
        label: 'NPM',
        icon: 'move_to_inbox',
        url: 'https://www.npmjs.com/package/@jood/file-reader',
      },
      {
        label: 'Docs',
        icon: 'library_books',
        url: 'https://molgga.github.io/jood-file-reader/documents',
      },
    ];
  }
  getMenuList() {
    return [
      {
        label: 'Demo',
        children: [
          {
            href: '/demo/read-stream',
            label: 'FileReadStream',
          },
          {
            href: '/demo/blob-image',
            label: 'BlobImageResize',
          },
        ],
      },
    ];
  }
}
