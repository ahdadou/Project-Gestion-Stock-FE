import { Product } from './../Models/Products.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private cartOrder: CartOrder = {
    idClient: 0,
    lignes : [new Ligne('first')]
  };

  carts$ = new BehaviorSubject<CartOrder>(this.cartOrder);

  constructor() { }







  delete(id): any{
    if (this.cartOrder.lignes.length > 1) {
    this.cartOrder.lignes = this.cartOrder.lignes.filter(o => o.id != id);
    }
    this.carts$.next(this.cartOrder);
  }


  addLigne(): any {
   let prod = new Ligne(this.uuidv4());
   this.cartOrder.lignes.push(prod);
   this.carts$.next(this.cartOrder);
  }

  passOrder(idClient): any{
    this.cartOrder.idClient = idClient;
    console.log(this.cartOrder);
  }

  valideLigne(item, id): any{
      let i = this.cartOrder.lignes.findIndex(
        (p) => p.id === id
      );

      this.cartOrder.lignes[i].quantity = item.quantity;
      this.cartOrder.lignes[i].prixht = item.prixht;
      this.cartOrder.lignes[i].tva = item.tva;
      this.cartOrder.lignes[i].reduction=item.reduction;
      this.cartOrder.lignes[i].idProduct=item.idProduct;
      this.cartOrder.lignes[i].totalHT=item.totalHT;
      this.cartOrder.lignes[i].totalTTC=item.totalTTC;
  }



  uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }



}


export class Ligne{
    public  id: string;
    public  quantity = 0;
    public  prixht = 0;
    public tva = 0;
    public reduction = 0;
    public idProduct = 0;
    public  totalHT = 0;
    public  totalTTC = 0;

    constructor(id: string) {
      this.id = id;
    }


}


export class CartOrder{
  idClient: number;
  lignes: Ligne[];
}
