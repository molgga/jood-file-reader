import { Component, OnInit } from '@angular/core';
import {
  FileReadStream,
  FileReadEventType,
  FileReadEvent,
  FileReadResponseType,
} from 'projects/packages/src/public-api';

@Component({
  selector: 'demo-read-stream',
  templateUrl: './read-stream.component.html',
  styleUrls: ['./read-stream.component.scss'],
})
export class ReadStreamComponent implements OnInit {
  constructor() {}

  reader: FileReadStream;
  optionChunks = [];
  optionResponseTypes = [];
  testChunk = 1024;
  testResponseType = FileReadResponseType.BLOB;
  changeStack: FileReadEvent[] = [];
  changeStackCount: number = 0;
  changeStackDisplayMax: number = 50;

  ngOnInit() {
    this.optionResponseTypes = [
      { label: 'BLOB', value: FileReadResponseType.BLOB },
      { label: 'BUFFER', value: FileReadResponseType.BUFFER },
    ];
    this.optionChunks = Array.from(Array(8)).map((a, b) => {
      const index = b + 1;
      const byte = Math.pow(index * index * 32, 2);
      const kb = byte / 1024;
      const mb = kb / 1024;
      const label = mb < 1 ? `${kb}kb` : `${mb.toFixed(2)}mb`;
      return {
        value: byte,
        label,
      };
    });
    this.testChunk = this.optionChunks[1].value;
  }

  onFileChange(evt) {
    const { files = [] } = (evt && evt.target) || {};
    const file = files[0];
    if (!file) return;
    this.readStart(file);
    evt.target.value = null;
  }

  onFileAbort() {
    if (this.reader) {
      this.reader.abort();
      this.reader.destroy();
      this.reader = null;
    }
  }

  readStart(file: File) {
    this.changeStack = [];
    this.changeStackCount = 0;
    if (this.reader) {
      this.reader.destroy();
      this.reader = null;
    }
    this.reader = new FileReadStream(file, {
      chunkSize: this.testChunk,
      responseType: this.testResponseType,
    });
    this.reader.observeState().subscribe((evt) => {
      const { type, state } = evt;
      this.changeStackCount++;
      this.changeStack.push({ type, state });
      if (this.changeStackDisplayMax < this.changeStack.length) {
        this.changeStack.shift();
      }
      switch (type) {
        case FileReadEventType.RESOLVE:
        case FileReadEventType.REJECT:
          console.log(state);
          this.reader.destroy();
          this.reader = null;
          break;
      }
    });
    this.reader.start().catch((err) => console.log(err));
  }
}
