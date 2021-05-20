import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';



@Component({
  selector: 'app-exemplo1',
  templateUrl: './exemplo1.page.html',
  styleUrls: ['./exemplo1.page.scss'],
})
export class Exemplo1Page implements OnInit {

  //antes do constructor:
  // Endereço legível
    endereco: string;
   // Coordenadas de localização
    latitude: number;
    longitude: number;
    precisao: number;


//configuração do geocoder
    geoencoderOptions: NativeGeocoderOptions = {
        useLocale: true,
        maxResults:5,
  };
  constructor(
    private geolocation: Geolocation, 
    private nativeGeocoder: NativeGeocoder
  ) { }

  ngOnInit() {
  }

//localização atual do dipositivo
  getGeolocation() {
        this.geolocation
          .getCurrentPosition()
          .then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            this.precisao = resp.coords.accuracy;
            this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
          })
          .catch((error) => {
            alert('Error getting location' + JSON.stringify(error));
          });
      }






    //método geocoder para buscar o endereço das coordenadas transmitidas como argumentos
  getGeoencoder(latitude, longitude) {
      this.nativeGeocoder
        .reverseGeocode(latitude, longitude, this.geoencoderOptions)
        .then((result: NativeGeocoderResult[]) => {
          this.endereco = this.gerarEndereco(result[0]);
        })
        .catch((error: any) => {
          alert('Error getting location' + JSON.stringify(error));
        });
    }






  //Endereço de retorno separado por vírgula
    gerarEndereco(enderecoObj) {
        let obj = [];
        let endereco = '';
        for (let key in enderecoObj) {
          obj.push(enderecoObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
          if (obj[val].length) endereco += obj[val] + ', ';
        }
        return endereco.slice(0, -2);
      }















}








