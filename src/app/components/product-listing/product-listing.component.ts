import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { Category, Product } from '../../product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  selectedCategory = '';
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService, public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchCategories();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;
      this.filteredProducts = [...this.products];
    });
  }

  fetchCategories(): void {
    this.productService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  filterByCategory(category: string): void {
    if (category === '') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.category.toString().toLowerCase() === category.toLowerCase()
      );
    }
  }

  openProductModal(product: Product): void {
    this.dialog.open(ProductModalComponent, {
      data: product,
      autoFocus: true,
      width: '500px',
      panelClass: 'custom-modal-container',
    });
  }

  generateStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  generateEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }

  goToWishlist(): void {
    this.router.navigate(['/favorites']);
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}
