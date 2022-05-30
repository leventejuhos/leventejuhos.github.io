import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name: string = "Juhos Levente"  
  tel: string = "0744 329 245"
  email: string = "juhoslevente1@gmail.com"
  location: string = "520023 Sepsiszentgyörgy, Árkosi u. 61"

  constructor() { }

}
