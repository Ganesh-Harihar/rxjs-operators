import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { AsyncAwaitComponent } from './pages/async-await/async-await.component';
import { PromiseComponent } from './pages/promise/promise.component';

const routes: Routes = [
  { path: '', redirectTo: 'promise', pathMatch: 'full' },
  { path: 'promise', component: PromiseComponent },
  { path: 'async-await', component: AsyncAwaitComponent },
  {
    path: 'observables',
    loadChildren: () => import('src/app/pages/observables/observables.module').then(m => m.ObservablesModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
