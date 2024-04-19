import { Injectable } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScriptRepositoryService {

  constructor() { }

  public getScript() {
    return of('SELECT [Name], [Age] FROM [People] WHERE [Age] > 18;')
      // .pipe(delay(1000))
      .pipe(tap(() => console.log('Script loaded')));
  }
}
