import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { IdentityRevealedDirective } from './identity-revealed.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
