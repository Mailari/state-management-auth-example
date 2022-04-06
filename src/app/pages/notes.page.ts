import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-notes',
  template: `<h1>Notes</h1>`
})
export class NotesComponent {}
@NgModule({
  declarations: [NotesComponent],
  exports: [NotesComponent],
  imports: [RouterModule.forChild([{ path: '', component: NotesComponent }])]
})
export class NotesModule {}
