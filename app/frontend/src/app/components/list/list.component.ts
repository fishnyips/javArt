import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../entry.service';
import {Router} from '@angular/router';
import {Entry} from '../../entry.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  entries: Entry[];
  displayedColumns = ['title', 'date', 'description', 'feeling'];

  constructor(private entryService: EntryService, private router: Router) { }

  ngOnInit() {
    this.fetchEntries();
  }

  fetchEntries() {
    this.entryService
      .getEntries()
      .subscribe((data: Entry[]) => {
        this.entries = data;
        console.log('Data requested ... ');
        console.log(this.entries);
      });
  }

}
