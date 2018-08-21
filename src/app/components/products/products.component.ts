import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Query } from '@angular/core/src/metadata/di';
import { parse } from 'url';

@Component({
  selector: "app-products-component",
  templateUrl: "./products.component.html",
  styleUrls: ["../../app.component.css"]
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  products: object[];

  handleClick(id) {
    console.log(id)
    const url = `https://ez95hkal.apicdn.sanity.io/v1/data/query/products?query=*[_id=="` + id + `" ]`
    this.http
      .get(
        url
      )
      .subscribe(data => {
        this.parseAndSave(data, url);
      });
  }

  parseAndSave(data, url) {
    const product = data["result"][0];
    let parsedId;
    parsedId = product["_id"];
    product["id"] = parsedId;
    product["url"] = url;
    console.log(product);
    this.http
      .post(
        `https://hoboseafood.netlify.com/.netlify/functions/postJsonOutput?id=` + parsedId + `` ,
        product,
        this._options
      )
      .subscribe(res => {
        console.log(res);
      });
    // Snipcart needs to find parsedProducts.
  }

  ngOnInit(): void {
    const query =
      '*[_type == "product"]{ name, _id, id, description, price, "imageUrl": image.asset->url }';

    this.http
      .get(
        `https://ez95hkal.apicdn.sanity.io/v1/data/query/products?query=${query}`
      )
      .subscribe(data => {
        this.products = data["result"];
      });
  }
}
