import { Buffer } from 'buffer';

export async function toBufferByBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      reader.onload = null;
      reader.onerror = null;
      try {
        const buffer = Buffer.from(reader.result);
        resolve(buffer);
      } catch (err) {
        reject(err);
      }
    };
    /* istanbul ignore next */
    reader.onerror = (evt: any) => {
      reader.onload = null;
      reader.onerror = null;
      reject(evt.error);
    };
    try {
      reader.readAsArrayBuffer(blob);
    } catch (err) {
      reject(err);
    }
  });
}
