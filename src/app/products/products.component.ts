import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsStore } from './data-access/products.store';
import { ProductTileComponent } from './ui/product-tile/product-tile.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductTileComponent, CommonModule, MatProgressSpinnerModule],
  templateUrl: './products.component.html',
  providers: [ProductsStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProductsComponent implements OnInit {
  protected readonly state$ = this.productsStore.state$;

  public constructor(private readonly productsStore: ProductsStore) { }

  public ngOnInit(): void {
    this.productsStore.load();
  }
}
