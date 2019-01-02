import { MaterialModule } from '#app/material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SimpleDialogComponent } from './components/dialogs/simple-dialog/simple-dialog.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [SimpleDialogComponent],
  entryComponents: [SimpleDialogComponent],
})
export class SharedModule {}
