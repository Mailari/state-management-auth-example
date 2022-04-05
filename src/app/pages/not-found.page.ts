import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `<div class="text-center tex-4xl">404 page not found</div>`
})
export class NotFound {}

@NgModule({
  declarations: [NotFound],
  exports: [NotFound],
  imports: [RouterModule.forChild([{ path: '', component: NotFound }])]
})
export class NotFoundModule {}
