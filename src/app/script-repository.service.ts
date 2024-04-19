import { Injectable } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScriptRepositoryService {

  constructor() { }

  public getScript() {
    return of(`
    SELECT supplier_id
    FROM suppliers s
    INNER JOIN orders o ON s.supplier_id = o.supplier_id
    WHERE order_date > '2020-01-01'
    UNION ALL
    SELECT supplier_id
    FROM suppliers s
    INNER JOIN orders o ON s.supplier_id = o.supplier_id
    WHERE order_date < '2020-01-01' AND product_category = 'Electronics';
    `)
      .pipe(tap(() => console.log('Script loaded')));
  }
}
