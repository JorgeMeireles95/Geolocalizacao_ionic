import { Component, OnInit } from '@angular/core';
declare var google;

@Component({
  selector: 'app-exemplo2',
  templateUrl: './exemplo2.page.html',
  styleUrls: ['./exemplo2.page.scss'],
})
export class Exemplo2Page implements OnInit {

map:any;

  constructor() { }

  ngOnInit(){
      const position  = new google.maps.LatLng(-22.9035,-43.2096);
      const mapOptions = {
      zoom:18,
      center:position,
      };
      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
      const marker = new google.maps.Marker({
      position:position,
      map : this.map,

    });
  }

}
