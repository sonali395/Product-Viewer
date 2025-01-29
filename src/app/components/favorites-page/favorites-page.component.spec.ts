import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { FavoritesPageComponent } from './favorites-page.component';
import { of } from 'rxjs';
import { Product } from '../../product.model';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesPageComponent],
      imports: [StoreModule, MatToolbar, MatIconModule, MatCardModule],
      providers: [provideMockStore()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display favorite products', () => {
    const favoriteProducts: Product[] = [
      {
        id: '1',
        title: 'Product 1',
        price: 100,
        description: 'Product 1 description',
        imageUrl: 'url1',
        rating: 4,
        stock: 10,
        thumbnail: 'thumb1',
        category: 'Beauty'
      },
      {
        id: '2',
        title: 'Product 2',
        price: 200,
        description: 'Product 2 description',
        imageUrl: 'url2',
        rating: 3,
        stock: 5,
        thumbnail: 'thumb2',
        category: 'Fragrances'
      },
    ];
    component.favorites$ = of(favoriteProducts);
    fixture.detectChanges();
    const productTitles = fixture.nativeElement.querySelectorAll('h3');
    expect(productTitles.length).toBe(2);
  });

  it('should remove product from favorites on button click', () => {
    const spy = spyOn(component, 'removeFromFavorites');
    const favoriteProduct: Product = {
      id: '1',
      title: 'Product 1',
      price: 100,
      description: 'Product 1 description',
      imageUrl: 'url1',
      rating: 4,
      stock: 10,
      thumbnail: 'thumb1',
      category: 'Beauty'
    };
    component.favorites$ = of([favoriteProduct]);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.warn'));
    button.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalledWith('1');
  });
});
