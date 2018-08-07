import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Query } from '@angular/core/src/metadata/di';
import { parse } from 'url';

@Component({
  selector: 'app-products-component',
  templateUrl: './products.component.html',
  styleUrls: ['../../app.component.css']
})

export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient) {}

  products: object[];

  handleClick(): void {
    this.http
      .get(
        `https://ez95hkal.apicdn.sanity.io/v1/data/query/products?query=*[_type=="product"]`
      )
      .subscribe(data => {
        this.parseAndSave(data);
      });
  }

  parseAndSave(data) {
    const products = data['result'];
    let parsedId;
    const parsedProducts = [];
    products.forEach(product => {
      parsedId = product['_id'];
      product['id'] = parsedId;
      product['url'] = `/v1/data/query/products?query=*[_type == "product"]`;
      parsedProducts.push(product);
    });
    console.log(parsedProducts);
    this.http.post(`https://hoboseafood.netlify.com/.netlify/functions/postJsonOutput`, parsedProducts)
    .subscribe(res => { console.log(res); });
    // Snipcart needs to find parsedProducts.
  }

  ngOnInit(): void {
    const query = '*[_type == "product"]{ name, _id, id, description, price, "imageUrl": image.asset->url }';

    this.http
      .get(
        `https://ez95hkal.apicdn.sanity.io/v1/data/query/products?query=${query}`
      )
      .subscribe(data => {
        this.products = data['result'];
      });

  }

}
