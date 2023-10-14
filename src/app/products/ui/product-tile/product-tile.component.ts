import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Product } from '@shared/products';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [RouterLink, MatCardModule, CurrencyPipe],
  templateUrl: './product-tile.component.html'
})
export class ProductTileComponent {
  @Input({ required: true }) public product!: Product;
}
