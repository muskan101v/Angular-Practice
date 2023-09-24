import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackByComponent } from './track-by/track-by.component';

const routes: Routes = [
  {
    path: 'track-by',
    loadComponent: () =>
      import('./track-by/track-by.component').then((m) => m.TrackByComponent),
  },
  {
    path: 'if-else',
    loadComponent: () =>
      import('./if-then-else/if-then-else.component').then(
        (m) => m.IfThenElseComponent
      ),
  },

  {
    path: 'switch',
    loadComponent: () =>
      import('./switch/switch.component').then((m) => m.SwitchComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pipe/pipe.component').then((m) => m.PipeComponent),
    title: 'Home page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
