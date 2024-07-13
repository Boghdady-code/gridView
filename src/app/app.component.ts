import { Component, OnInit } from '@angular/core';
import { DataObject } from './data-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  dataObject: DataObject = {
    uniqueKey: 'id',
    data: [],
    apiPath: 'https://jsonplaceholder.typicode.com/posts',
    params: {
      limit: 10,
      offset: 0,
      orderBy: {
        column: 'id',
        type: 'ASC',
      },
    },
    sorttable: true,
    draggable: true,
    columns: [
      {
        key: 'id',
        header: 'serial number',
        width: 10,
        height: 50,
        draggable: false,
        sorttable: true,
        type: 'text',
        classes: 'py-2',
      },
      {
        key: 'name',
        header: 'name',
        width: 3,
        height: 4,
        draggable: false,
        sorttable: true,
        type: 'image',
        classes: 'py-2',
      },
      {
        key: 'username',
        header: 'username',
        width: 10,
        height: 50,
        draggable: false,
        type: 'toggle',
        classes: 'py-2',
      },
      {
        key: 'email',
        header: 'email',
        width: 10,
        height: 50,
        draggable: false,
        type: 'dropdown',
        classes: 'py-2',
      },
    ],
  };
  constructor() {}
  ngOnInit(): void {}
  title = 'grid-view';
}
