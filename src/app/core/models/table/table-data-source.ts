import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

export class TableDataSource extends DataSource<any> {
  constructor(public items: any[]) {
    super();
  }

  connect(): Observable<any[]> {
    return of(this.items);
  }

  disconnect(): void {
  }
}
