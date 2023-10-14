import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { BackButtonDirective } from '@shared/directives';
import { ProductsService } from '@shared/products';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf, CurrencyPipe, AsyncPipe, MatButtonModule, BackButtonDirective, MatProgressSpinnerModule],
  templateUrl: './product-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProductDetailsComponent {
  protected readonly product$ = this.activatedRoute.paramMap.pipe(
    map(x => x.get('id')),
    switchMap(id => this.productsService.getProduct(id!))
  );
  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productsService: ProductsService) { }

  test(product: any) {
    console.log(product);
  }
}
