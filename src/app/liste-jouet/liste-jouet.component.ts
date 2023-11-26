import { Component, OnInit } from '@angular/core';
import { Jouet } from 'src/models/Jouet';
import { ServiceJouet } from '../services/serviceJouet';

@Component({
  selector: 'app-liste-jouet',
  templateUrl: './liste-jouet.component.html',
  styleUrls: ['./liste-jouet.component.scss']
})
export class ListeJouetComponent implements OnInit {
  jouets!:Jouet[];
  constructor(private serviceJouet: ServiceJouet){}
  ngOnInit(): void {
    this.jouets = this.serviceJouet.jouets;
  }
}
