import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly FAVORITES_KEY = 'favorites';

  getFavorites(): Product[] {
    const favorites = localStorage.getItem(this.FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  }

  setFavorites(favorites: Product[]): void {
    localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites));
  }

  addFavorite(product: Product): void {
    const favorites = this.getFavorites();
    favorites.push(product);
    this.setFavorites(favorites);
  }

  removeFavorite(productId: string): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(product => product.id !== productId);
    this.setFavorites(favorites);
  }
}
