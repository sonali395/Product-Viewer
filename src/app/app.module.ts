import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';  
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { productReducer } from './state/product.reducer';
import { ProductEffects } from './state/product.effects';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent,
    ProductModalComponent,
    FavoritesPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule, 
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ product: productReducer }),
    EffectsModule.forRoot([ProductEffects]),

    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
