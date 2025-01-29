import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './product.reducer';

export const selectProductState = createFeatureSelector<State>('product');

export const selectFavorites = createSelector(
  selectProductState,
  (state: State) => state.favorites
);
