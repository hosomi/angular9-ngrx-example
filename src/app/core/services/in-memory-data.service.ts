import { Injectable } from '@angular/core';
import { RequestInfo, InMemoryDbService } from 'angular-in-memory-web-api';
import { Information } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo) {
    return { informations };
  }  
}

const informations: Information[] = [
  {
    id: 1,
    Title: 'お知らせタイトル１１',
    Contents: 'お知らせ内容１１'
  },
  {
    id: 2,
    Title: 'お知らせタイトル２２',
    Contents: 'お知らせ内容２２'
  },
  {
    id: 3,
    Title: 'お知らせタイトル３３',
    Contents: 'お知らせ内容３３'
  },
];