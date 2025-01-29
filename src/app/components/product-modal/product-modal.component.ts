import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { addFavorite, loadFavorites } from '../../state/product.actions';
import { map, Observable } from 'rxjs';
import { Product } from '../../product.model';
import { selectFavorites } from '../../state/product.selector';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
  favorites$: Observable<Product[]>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public product: any,
    private store: Store,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ProductModalComponent>
  ) {
    this.favorites$ = this.store.pipe(select(selectFavorites));
  }

  ngOnInit(): void {
    this.store.dispatch(loadFavorites());
  }

  onClose(): void {
    this.dialogRef.close();
  }

  addToFavorites(): void {
    this.store.dispatch(addFavorite({ product: this.product }));
    this.dialogRef.close();
    this.snackBar.open(this.product.title + ' added to favorites!', 'Close', {
      duration: 2000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  }

  isFavorite(product: Product): Observable<boolean> {
    return this.favorites$.pipe(
      map((favorites) => favorites.some((fav) => fav.id === product.id))
    );
  }
}
