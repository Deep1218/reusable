import { SecondConverterPipe } from './second-converter.pipe';

describe('SecondConverterPipe', () => {
  const pipe = new SecondConverterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('convert seconds into hhmmss: case 1', () => {
    expect(pipe.transform(7)).toBe('00:07');
  });
  it('convert seconds into hhmmss: case 2', () => {
    expect(pipe.transform(14)).toBe('00:14');
  });
  it('convert seconds into hhmmss: case 3', () => {
    expect(pipe.transform(60)).toBe('01:00');
  });
  it('convert seconds into hhmmss: case 4', () => {
    expect(pipe.transform(69)).toBe('01:09');
  });
  it('convert seconds into hhmmss: case 5', () => {
    expect(pipe.transform(3599)).toBe('59:59');
  });
  it('convert seconds into hhmmss: case 6', () => {
    expect(pipe.transform(3600)).toBe('01:00:00');
  });
  it('convert seconds into hhmmss: case 7', () => {
    expect(pipe.transform(3605)).toBe('01:00:05');
  });
  it('convert seconds into hhmmss: case 8', () => {
    expect(pipe.transform(363600)).toBe('101:00:00');
  });
});
