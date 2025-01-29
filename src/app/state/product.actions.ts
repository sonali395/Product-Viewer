import { createAction, props } from '@ngrx/store';
import { Product } from '../product.model';

export const loadFavorites = createAction('[Product] Load Favorites');

export const loadFavoritesSuccess = createAction(
  '[Product] Load Favorites Success',
  props<{ favorites: Product[] }>()
);

export const addFavorite = createAction(
  '[Product] Add Favorite',
  props<{ product: Product }>()
);

export const removeFavorite = createAction(
  '[Product] Remove Favorite',
  props<{ productId: string }>()
);

export const updateFavoritesSuccess = createAction(
  '[Product] Update Favorites Success',
  props<{ favorites: Product[] }>()
);

