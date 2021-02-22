import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { shopJean } from '../../../../app/app.const';
import { ApiService } from '../../../../app/api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public contacts = [] as any;
  public total: number | undefined;
  public contactModel: any;
  public shops = [] as any;

  constructor(private api: ApiService) {
    localStorage.setItem('cart', JSON.stringify(shopJean));
    const cartShop = localStorage.getItem('cart');
    this.contacts = cartShop ? JSON.parse(cartShop) : [];
  }
  ngOnInit(): void {
    // this.api.admin.contact.get({}).subscribe((Response) => {
    //   this.contacts = Response.items;
    // });
    const anyShop = localStorage.getItem('shop');
    this.shops = anyShop ? JSON.parse(anyShop) : [];
    this.total = this.shops.length;
  }

  updatetotal(data: any) {
    const shop: any = this.shops;
    const items = {
      id: data.id,
      imgUrl: data.shop_imgUrl,
      name: data.shop_name,
      price: data.shop_price,
      total: data.total,
    };

    shop.push(items);
    this.shops = shop
      .map((io: { [x: string]: any }) => io['id'])
      .map(
        (io: any, i: any, array: string | any[]) => array.indexOf(io) === i && i
      )
      .filter((io: string | number) => shop[io])
      .map((io: string | number) => shop[io]);
    this.total = this.shops.length;
    localStorage.setItem('shop', JSON.stringify(this.shops));
  }

  deletetotal(id: any) {
    this.shops.splice(id, 1);
    localStorage.setItem('shop', JSON.stringify(this.shops));
    this.total = this.shops.length;
  }

  amounttotal(items: any) {
    localStorage.setItem('shop', JSON.stringify(this.shops));
  }
}
