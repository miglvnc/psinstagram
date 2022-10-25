import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.sass']
})
export class DogsListComponent implements OnInit {
  
  dogListUrl = 'https://dog.ceo/api/breeds/list';
  dogList: any;
  selectedValue: any;
  dogImg: any;
  link: any;
  text: any;
  header: any;
  dogImgDisplay: any;
  
  
  ChangeDog(e){

    this.selectedValue = e.target.value;
    this.header = "Nazwa: " + this.selectedValue
    this.ImgChange(this.selectedValue)
    this.wikiLink(this.selectedValue)
    this.text = 'Więcej o piesku możesz przeczytać na Wikipedii: ';

  }
  
  ImgChange(e){
    this.http.get(`https://dog.ceo/api/breed/${e}/images/random`).subscribe((res) => {
      this.dogImg = res;
      this.dogImgDisplay = this.dogImg.message
    })
  }
  
  wikiLink(e){
    this.link = `https://en.wikipedia.org/wiki/${e}`;
    console.log(this.link)
    return this.link;
  }
  
  constructor(private http : HttpClient) { }
  
  ngOnInit(): void {
    this.http.get(this.dogListUrl).subscribe((res) => {
      this.dogList = res;
      
    })
  }
}
