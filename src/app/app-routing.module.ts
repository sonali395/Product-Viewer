import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';

const routes: Routes = [
  { path: '', component: ProductListingComponent },
  { path: 'favorites', component: FavoritesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
