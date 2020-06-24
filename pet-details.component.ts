import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { pets } from "../pets";

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
pet
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(pet){
    window.alert("We've added the pet to your cart!");
    this.cartService.addToCart(pet);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pet = pets[+params.get('petId')];
  });
  }
}
