import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-orders-delivery',
  templateUrl: './orders-delivery.page.html',
  styleUrls: ['./orders-delivery.page.scss'],
})
export class OrdersDeliveryPage implements OnInit {
  map: google.maps.Map;
  companyPosition: google.maps.LatLng;
  customerPosition: google.maps.LatLng;
  companyMaker: google.maps.Marker;
  customerMaker: google.maps.Marker;
  autoComplete = new google.maps.places.AutocompleteService();
  direction = new google.maps.DirectionsService();
  directionsRender = new google.maps.DirectionsRenderer();
  addressList: any = [];
  customerAddress: string = "";
  //permite pegar elemento do DOM
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(
    public toolsService: ToolsService,
    private ngZone: NgZone,
    public authService: AuthenticationsService,
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.companyPosition = new google.maps.LatLng(-23.5365688,-46.6852039);
  }

  ionViewWillEnter(){
    if (this.authService.getLoginSuccessful()) {
      this.showMap();
      this.pinCompanyPosition(this.companyPosition);
    } else {
      this.authService.setLogout();
    }
  }

  private showMap(){
    const options = {
      center: this.companyPosition,
      zoom: 15,
      disableDefaultUI: false
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  public getPosition(){
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   this.companyPosition = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
    //   this.goToPosition(this.companyPosition,19);
    // }).catch((error) => {
    //   this.toolsService.showToast("Não foi possível obter sua localização",1000,"warning");
    // });
    this.companyPosition = new google.maps.LatLng(-23.5365688,-46.6852039);
  }

  private goToPosition(position: google.maps.LatLng, zoom: number = 6){
    this.map.setCenter(position);
    this.map.setZoom(zoom);
  }

  private pinCompanyPosition(pinPosition: google.maps.LatLng) {
    if(this.companyMaker) {
      this.companyMaker.setMap(null);
    } else {
      this.companyMaker = new google.maps.Marker({ map: null });
    }
    this.companyMaker.setPosition(pinPosition);
    this.companyMaker.setMap(this.map);
    this.companyMaker.setAnimation(google.maps.Animation.DROP);
  }

  private pinCustomerPosition(pinPosition: google.maps.LatLng) {
    if(this.customerMaker) {
      this.customerMaker.setMap(null);
    } else {
      this.customerMaker = new google.maps.Marker({ map: null });
    }
    this.customerMaker.setPosition(pinPosition);
    this.customerMaker.setMap(this.map);
    this.customerMaker.setAnimation(google.maps.Animation.DROP);
  }

  public searchAddress(event: any){
    const search = event.target.value as string;
    if(!search.trim().length){
      this.addressList = [];
      return false;
    }
    this.autoComplete.getPlacePredictions({ input: search }, (addressArray, status) => {
      if(status == 'OK') {
        this.ngZone.run(() => {
          this.addressList = addressArray;
        });
      } else {
        this.addressList = [];
      }
    });
  }

  public mapTheRoute(local: google.maps.places.AutocompletePrediction){
    this.addressList = [];
    new google.maps.Geocoder().geocode({address: local.description}, geocodeResult => {
      this.pinCustomerPosition(geocodeResult[0].geometry.location);

      const route: google.maps.DirectionsRequest = {
        origin: this.companyPosition,
        destination: geocodeResult[0].geometry.location,
        unitSystem: google.maps.UnitSystem.METRIC,
        travelMode: google.maps.TravelMode.DRIVING
      };

      this.direction.route(route, (routeResult, status) => {
        if(status == 'OK'){
          this.ngZone.run(() => {
            this.customerAddress = routeResult['routes'][0]['legs'][0].end_address;
          });
          this.directionsRender.setMap(this.map);
          this.directionsRender.setDirections(routeResult);
          this.directionsRender.setOptions({ suppressMarkers: true });
          console.log(routeResult);
          console.log(routeResult['routes'][0]['legs'][0].end_address);
        }
      });

    });
  }
}