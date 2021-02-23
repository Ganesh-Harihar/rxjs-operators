import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ObservablesModule } from './pages/observables/observables.module';
import { PromiseComponent } from './pages/promise/promise.component';
import { AsyncAwaitComponent } from './pages/async-await/async-await.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    AsyncAwaitComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObservablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
