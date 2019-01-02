import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthEffects } from './effects/auth.effects';
import { reducers } from './reducers';

import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LogoutPageComponent } from './containers/logout-page/logout-page.component';

export const COMPONENTS = [LoginPageComponent, LogoutPageComponent];

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: COMPONENTS,
  entryComponents: [],
})
export class AuthModule {}
