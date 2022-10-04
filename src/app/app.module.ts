import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { MagicOvenComponent } from './magic-oven/magic-oven.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    KitchenComponent,
    MagicOvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
