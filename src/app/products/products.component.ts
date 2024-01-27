import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit
{
  products: Array<Product> = [];
  totalPage: number = 0;
  pageSize: number = 3;
  currentPage: number = 1;
  public keyword: string = '';

  constructor(private http:HttpClient,
              private productService: ProductService,
              private router: Router,
              public appState: AppStateService
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts(this.keyword ,this.currentPage, this.pageSize)
      .subscribe((resp: any) => {
      this.products = resp.body;
      let totalProducts: number = resp.headers.get('X-Total-Count');
      this.totalPage = Math.ceil(totalProducts / this.pageSize);
    });
  }

  handleCheckProduct(product: Product) {
    this.productService.checkProduct(product)
      .subscribe((data: any) => {
      product.checked = data.checked;
    });
  }

  handleDeleteProduct(product: Product) {
    this.productService.deleteProduct(product)
      .subscribe((data: any) => {
      this.getProducts();
    });
  }

  handleGoToPage(number: number) {
    this.currentPage = number;
    this.getProducts();
  }

  handleEditProduct(product: Product) {
    this.router.navigate([`/admin/editProduct/${product.id}`])
  }
}
