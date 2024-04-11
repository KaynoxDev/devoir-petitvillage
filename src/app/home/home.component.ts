import { Component, OnInit, LOCALE_ID } from "@angular/core";
import { ProductsService } from "../products.service";
import { FormsModule } from "@angular/forms";
import { CommonModule, registerLocaleData } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import localeFr from "@angular/common/locales/fr";
registerLocaleData(localeFr);
interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  picture: string;
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedProductId: number = 1;
  searchTerm: string = "";
  sortBy: string = "price-asc";

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.filteredProducts = [...this.products];
    this.sortProducts();
  }

  sortProducts(): void {
    if (this.sortBy === "price-asc") {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === "price-desc") {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewProduct(productId: number) {
    this.selectedProductId = productId;
    this.router.navigate(["/product", productId]);
  }
}
