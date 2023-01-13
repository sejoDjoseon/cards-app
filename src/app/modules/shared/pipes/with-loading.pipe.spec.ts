import { of, throwError } from 'rxjs';
import { WithLoadingPipe } from './with-loading.pipe';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

describe('WithLoadingPipe', () => {
  const pipe = new WithLoadingPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms undefined returns undefined', () => {
    expect(pipe.transform(undefined)).toBeUndefined();
  });

  it('transforms null returns null', () => {
    expect(pipe.transform(null)).toBeNull();
  });

  it('transforms and Observable into an observable starts loading and ends resolved with the value', () => {
    const result$ = pipe.transform(of(1))!;
    const observerSpy = subscribeSpyTo(result$);
    expect(observerSpy.getValues()).toEqual([
      { loading: true },
      { loading: false, value: 1 },
    ]);
  });

  it('transforms and Observable that fails into an observable starts loading and ends resolved with error', () => {
    const error = new Error('test');
    const result$ = pipe.transform(throwError(() => error))!;
    const observerSpy = subscribeSpyTo(result$);
    expect(observerSpy.getValues()).toEqual([
      { loading: true },
      { loading: false, error: error },
    ]);
  });
});
