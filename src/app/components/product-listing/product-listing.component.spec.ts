import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { provideMockStore } from '@ngrx/store/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { ProductListingComponent } from './product-listing.component';

describe('ProductListingComponent', () => {
  let component: ProductListingComponent;
  let fixture: ComponentFixture<ProductListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListingComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        StoreModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatGridListModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
      ],
      providers: [provideMockStore()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter products by category', () => {
    component.products = [
      {
        id: '1', title: 'Product 1', category: 'Beauty',
        description: '',
        price: 100,
        imageUrl: '',
        rating: 3,
        stock: 10,
        thumbnail: ''
      },
      {
        id: '2', title: 'Product 2', category: 'Clothing',
        description: '',
        price: 500,
        imageUrl: '',
        rating: 2,
        stock: 40,
        thumbnail: ''
      }
    ];

    component.selectedCategory = 'Beauty';
    component.filterByCategory('Beauty');
    expect(component.filteredProducts.length).toBe(1);
    expect(component.filteredProducts[0].category).toBe('Beauty');
  });


  it('should open product modal on button click', () => {
    const spy = spyOn(component, 'openProductModal');
    const product = {
      id: '1',
      title: 'Product 1',
      category: 'Beauty',
      description: '',
      price: 100,
      imageUrl: '',
      rating: 3,
      stock: 10,
      thumbnail: ''
    };

    component.filteredProducts = [product];
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.primary'));
    button.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalledWith(product);
  });

  it('should navigate to favorites on button click', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    const button = fixture.debugElement.query(By.css('.favorite-icon'));
    button.triggerEventHandler('click', null);
    expect(navigateSpy).toHaveBeenCalledWith(['/favorites']);
  });

});

