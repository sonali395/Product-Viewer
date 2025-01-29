import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { loadFavorites, loadFavoritesSuccess, addFavorite, removeFavorite, updateFavoritesSuccess } from './product.actions';
import { LocalStorageService } from '../services/local-storage.service';
import { Product } from '../product.model';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
  ) { }

  loadFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFavorites),
      switchMap(() => {
        const favorites = this.localStorageService.getFavorites();
        return favorites ? [loadFavoritesSuccess({ favorites })] : EMPTY;
      })
    )
  );

  addFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFavorite),
      map(action => {
        let favorites = this.localStorageService.getFavorites();
        favorites = [...favorites, action.product];
        this.localStorageService.setFavorites(favorites);
        return updateFavoritesSuccess({ favorites });
      })
    )
  );

  removeFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeFavorite),
      map(action => {
        let favorites = this.localStorageService.getFavorites();
        favorites = favorites.filter((product: Product) => product.id !== action.productId);
        this.localStorageService.setFavorites(favorites);
        return updateFavoritesSuccess({ favorites });
      })
    )
  );
}

