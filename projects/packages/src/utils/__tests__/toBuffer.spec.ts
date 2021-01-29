
import { toBufferByBlob } from '../toBuffer';

function createSampleBlob(byte: number) {
  const buffer = new ArrayBuffer(byte);
  return new Blob([buffer]);
}

describe('toBuffer', () => {
  
  it("toBufferByBlob 확인", async () => {
    const blob = createSampleBlob(1024);
    const buffer = await toBufferByBlob(blob);
    expect(buffer instanceof Uint8Array).toBe(true);
  });

  it("toBufferByBlob 오류 확인", async (testDone) => {
    toBufferByBlob(null).catch(err => {
      expect(err).not.toBe(null);
      expect(err instanceof TypeError).toBe(true);
      testDone();
    });
  });

});