import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '@shared/users';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } satisfies MatFormFieldDefaultOptions }],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './edit-user-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditUserDialogComponent {
  public constructor(@Inject(MAT_DIALOG_DATA) protected readonly user: User) { }
}
