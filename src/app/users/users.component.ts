import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductTileComponent } from '../products/ui/product-tile/product-tile.component';
import { UsersStore } from './data-access/users.store';
import { UsersTableComponent } from './ui/users-table/users-table.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ProductTileComponent, CommonModule, MatProgressSpinnerModule, UsersTableComponent, MatInputModule, MatFormFieldModule],
  templateUrl: './users.component.html',
  providers: [UsersStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class UsersComponent implements OnInit {
  public constructor(protected readonly usersStore: UsersStore) { }

  public ngOnInit(): void {
    this.usersStore.load();
  }

  public updateFilter(event: Event): void {
    const filter = (event.target as HTMLInputElement).value;
    this.usersStore.patchState({ filter });
  }
}
