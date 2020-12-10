import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { GalleryListComponent } from 'src/app/components/gallery-list/gallery-list.component';

const routes: Routes = [ {
  path: 'gallery',
  component: GalleryComponent,
  
},
{
  path: 'gallery-details/:id',
  component: GalleryListComponent,
  
},
{ path: '',
  redirectTo: '/gallery',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
