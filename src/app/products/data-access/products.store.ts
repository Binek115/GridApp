import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Product, ProductsService } from '@shared/products';
import { switchMap, tap } from 'rxjs';

interface ProductsStoreState {
  products: Product[];
  loadingState: 'loaded' | 'loading' | 'error';
}

@Injectable()
export class ProductsStore extends ComponentStore<ProductsStoreState> {
  public readonly load = this.effect<void>($ => $.pipe(
    tap(() => this.patchState({ loadingState: 'loading' })),
    switchMap(() => this.productsService.getProducts().pipe(
      tapResponse(
        products => this.patchState({ products }),
        () => this.patchState({ loadingState: 'error' }),
        () => this.patchState({ loadingState: 'loaded' }))
    ))
  ));

  public constructor(private readonly productsService: ProductsService) {
    super({
      products: [],
      loadingState: 'loaded'
    });
  }
}