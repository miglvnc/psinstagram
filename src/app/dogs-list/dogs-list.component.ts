import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.sass']
})
export class DogsListComponent implements OnInit {
  
  dogListUrl = 'https://dog.ceo/api/breeds/list';
  dogList: any;

  selectedDog?: Dog;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.dogListUrl).subscribe((res) => {
      this.dogList = res;
      console.log(this.dogList)
    })
  }

  onSelect(dog: Dog): void {
    this.selectedDog = dog;
  }

}
