import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

public serverName;
public serverContent;


public zhar=[];
public enmiZhar = [];


  constructor() { }

  ngOnInit() {
  }


  redButtonClick(){
      this.zhar.push({
          'name': this.serverName,
          'content': this.serverContent,
          'color': 'red'
     });
  }

  blueButtonClick(){
    this.zhar.push({
        'name': this.serverName,
        'content': this.serverContent,
        'color': 'blue'
   });
}

}
