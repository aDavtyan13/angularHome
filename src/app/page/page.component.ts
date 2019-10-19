import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

public serverName;
public serverContent;

public arrayOfServerNames=[];
public arrayOfServerContents = [];



  constructor() { }

  ngOnInit() {
  }


  redButtonClick(){
      // return this.arrayOfServerNames.push(this.serverName),this.arrayOfServerContents.push(this.serverContent);
      return this.arrayOfServerNames.push(this.serverName);
  }

}
