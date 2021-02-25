import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ObservablesModule } from './pages/observables/observables.module';
import { PromiseComponent } from './pages/promise/promise.component';
import { AsyncAwaitComponent } from './pages/async-await/async-await.component';
import { NotFoundComponent } from './not-found.component';
import { AngularFireModule } from '@angular/fire';

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
    ObservablesModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDHBhYaeGPQuVYpCodlXlhr3kkjjCsyHms",
      authDomain: "saragama-31d9e.firebaseapp.com",
      databaseURL: "https://saragama-31d9e.firebaseio.com",
      projectId: "saragama-31d9e",
      storageBucket: "saragama-31d9e.appspot.com",
      messagingSenderId: "124296449440",
      appId: "1:124296449440:web:e9648b3a0c14083ab5e8c5",
      measurementId: "G-DCZ0ZRQNJY"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
