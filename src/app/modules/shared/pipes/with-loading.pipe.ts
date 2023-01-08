import { Pipe, PipeTransform } from '@angular/core';
import { isObservable, Observable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

@Pipe({
  name: 'withLoading',
})
export class WithLoadingPipe implements PipeTransform {
  transform<T>(
    val: Observable<T> | undefined | null
  ):
    | Observable<{ loading: boolean; error?: any; value?: T }>
    | undefined
    | null {
    return isObservable(val)
      ? val.pipe(
          map((value: T) => ({ loading: false, value })),
          startWith({ loading: true }),
          catchError((error) => of({ loading: false, error }))
        )
      : val;
  }
}
