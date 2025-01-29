import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';


import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ProductModalComponent } from './product-modal.component';

describe('ProductModalComponent', () => {
  let component: ProductModalComponent;
  let fixture: ComponentFixture<ProductModalComponent>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<ProductModalComponent>>;

  beforeEach(async () => {
    dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [ProductModalComponent],
      imports: [CommonModule, HttpClientModule, StoreModule, MatDialogModule],
      providers: [
        provideMockStore(),
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            product: { id: '1', title: 'Product 1', description: 'Description', price: 100, stock: 20, images: [] }
          }
        },
        {
          provide: MatDialogRef,
          useValue: dialogRef
        },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product details', () => {
    component.product = { id: '1', title: 'Product 1', description: 'Description', price: 100, stock: 20, images: [] };
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.modal-header');
    expect(title.textContent).toContain('Product 1');
  });

  it('should add to favorites on button click if not already in favorites', () => {
    const spy = spyOn(component, 'addToFavorites');
    component.product = { id: '1', title: 'Product 1', description: 'Description', price: 100, stock: 20, images: [] };
    component.isFavorite = () => of(false);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button.primary'));
    button.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });
});
