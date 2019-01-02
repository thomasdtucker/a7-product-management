import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { CoreEffects } from '#app/core/effects/core.effects';
import { MaterialModule } from '#app/material';

import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

export const COMPONENTS = [
  HeaderComponent,
  PageNotFoundComponent,
  SidenavComponent,
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([CoreEffects]),
    RouterModule,
    MaterialModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}
