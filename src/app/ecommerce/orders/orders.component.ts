import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonclick() {
    console.log("İlk deneme");
  }
  trashclick(){
    console.log("Silme İşlemi Başarılı");
  }
  editclick(){
    console.log("Güncelleme Başarılı");
  }

}
