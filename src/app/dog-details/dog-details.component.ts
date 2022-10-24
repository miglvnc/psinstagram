import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.sass']
})
export class DogDetailsComponent implements OnInit {

  @Input() dog?: Dog;

  constructor() { }

  ngOnInit(): void {
  }

}
