import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorDialogComponent } from './componentes/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CategoryPipe } from './pipes/category.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Modulo compartilhado para importacao de tudo que nossa aplicacao ira utilizar.
@NgModule({
    declarations: [ErrorDialogComponent, CategoryPipe],
    imports: [MatDialogModule, CommonModule, MatButtonModule, MatSnackBarModule],
    exports: [
        CommonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        ErrorDialogComponent,
        MatDialogModule,
        MatButtonModule,
        CategoryPipe,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule
    ]
})
export class SharedModule {}
