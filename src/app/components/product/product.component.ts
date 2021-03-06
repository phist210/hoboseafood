import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  product: object;

  setProduct(id): void {
    const query = `*[_id == '${id}']{ name, _id, description, price, 'imageUrl': image.asset->url }`;

    this.http
      .get(
        `https://ez95hkal.api.sanity.io/v1/data/query/products?query=${query}`
      )
      .subscribe(data => {
        this.product = data['result'][0];
      });
  }

  ngOnInit(): void {
    this.route.url
      .subscribe(curr => {
        this.setProduct(curr[1].path);
      });
  }
}
