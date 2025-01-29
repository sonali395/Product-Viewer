import { createReducer, on } from '@ngrx/store';
import { loadFavoritesSuccess, updateFavoritesSuccess } from './product.actions';
import { Product } from '../product.model';

export interface State {
  favorites: Product[];
}

export const initialState: State = {
  favorites: []
};

export const productReducer = createReducer(
  initialState,
  on(loadFavoritesSuccess, (state, { favorites }) => ({
    ...state,
    favorites
  })),
  on(updateFavoritesSuccess, (state, { favorites }) => ({
    ...state,
    favorites
  }))
);
