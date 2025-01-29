import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadFavorites, removeFavorite } from '../../state/product.actions';
import { Product } from '../../product.model';
import { selectFavorites } from '../../state/product.selector';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesPageComponent implements OnInit {
  favorites$: Observable<Product[]> = this.store.pipe(select(selectFavorites));

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadFavorites());
  }

  removeFromFavorites(productId: string): void {
    this.store.dispatch(removeFavorite({ productId }));
  }

  goToHomepage(): void {
    this.router.navigate(['/']);
  }
}

