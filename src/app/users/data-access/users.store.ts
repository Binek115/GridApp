import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { User, UsersService } from '@shared/users';
import { filter, switchMap, tap } from 'rxjs';
import { EditUserDialogComponent } from '../ui/edit-user-dialog/edit-user-dialog.component';

interface UsersStoreState {
  users: User[];
  filter: string;
  loadingState: 'loaded' | 'loading' | 'error';
}

@Injectable()
export class UsersStore extends ComponentStore<UsersStoreState> {
  public readonly load = this.effect<void>($ => $.pipe(
    tap(() => this.patchState({ loadingState: 'loading' })),
    switchMap(() => this.usersService.getUsers().pipe(
      tapResponse(
        users => this.patchState({ users }),
        () => this.patchState({ loadingState: 'error' }),
        () => this.patchState({ loadingState: 'loaded' }))
    ))
  ));

  public readonly editUser = this.effect<User>($ => $.pipe(
    switchMap(user => this.matDialog.open<EditUserDialogComponent, User, User>(EditUserDialogComponent, { data: structuredClone(user) }).afterClosed().pipe(
      filter((x): x is User => !!x),
      tap(user => this.updateUser(user))
    ))
  ));

  private readonly updateUser = this.updater<User>((state, user) => ({ ...state, users: state.users.map(x => x.id === user.id ? user : x) }));

  public constructor(
    private readonly matDialog: MatDialog,
    private readonly usersService: UsersService) {
    super({
      users: [],
      filter: '',
      loadingState: 'loaded'
    });
  }
}