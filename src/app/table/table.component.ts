import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DataObject } from '../data-object';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() dataObject!: DataObject;
  serverData: any[] = [];
  @ViewChildren('cell') cell!: QueryList<ElementRef>;
  constructor(private tableService: TableService) {}

  getData() {
    this.tableService.getData().subscribe((data) => {
      this.serverData = data;

      // console.log(this.serverData);
    });
  }

  getCellInputType() {
    if (this.dataObject) {
      for (let column of this.dataObject.columns) {
        if (column.type === 'text') {
          console.log(column.key);
        } else if (column.type === 'image') {
          console.log(column.key);
        }
      }
    }
  }

  ngAfterViewInit(): void {
    this.getCellInputType();
  }

  ngOnChanges(): void {}
  ngOnInit(): void {
    console.log(this.dataObject);
    this.getData();
  }
}
