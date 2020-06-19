import { Injectable } from '@angular/core';
import { Information } from 'src/app/shared/interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationDataService {

  informations: Information[] = [
    {
      id: 1,
      Title: 'お知らせタイトル１',
      Contents: 'お知らせ内容１'
    },
    {
      id: 2,
      Title: 'お知らせタイトル２',
      Contents: 'お知らせ内容２'
    },
    {
      id: 3,
      Title: 'お知らせタイトル３',
      Contents: 'お知らせ内容３'
    },
  ];

  getInformations(): Observable<Information[]> {
    return of(this.informations);
  }

}
