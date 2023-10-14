import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '@shared/users';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent implements OnInit {
  @Input({ required: true }) public set data(data: User[]) {
    this.dataSource.data = data;
  }
  @Input({ required: true }) public set filter(filter: string) {
    this.dataSource.filter = filter;
  }

  @Output() public readonly dblClickRow = new EventEmitter<User>();

  @ViewChild(MatPaginator, { static: true }) private readonly matPaginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) private readonly matSort!: MatSort;

  protected readonly dataSource = new MatTableDataSource<User>();
  protected readonly columnNames = ['name', 'email', 'role', 'password'];

  public ngOnInit(): void {
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.matSort;
  }
}
