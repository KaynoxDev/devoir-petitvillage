import { Injectable } from "@angular/core";

export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  picture: string;
}

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: "Figurine Astérix",
      desc: "Figurine en plastique d'Astérix, le personnage principal de la série. Le représente souvent dans sa pose emblématique, avec son casque ailé et sa ceinture.",
      price: 5,
      picture: "./assets/img/figurine-asterix.jpg",
    },
    {
      id: 2,
      name: "Figurine Obélix",
      desc: "Figurine en plastique d'Obélix, le meilleur ami d'Astérix. Souvent représenté tenant un menhir ou un sanglier.",
      price: 12.5,
      picture: "./assets/img/figurine-obelix.JPG",
    },
    {
      id: 3,
      name: "Set de figurines\nAstérix et Obélix",
      desc: "Contient des figurines d'Astérix et Obélix, ainsi que d'autres personnages de la série comme Idéfix, Abraracourcix ou Falbala.",
      price: 8,
      picture: "./assets/img/set-figurine.jpg",
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found`);
    }
    return product;
  }
}
