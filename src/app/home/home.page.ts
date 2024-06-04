import { Component } from '@angular/core';
import { OnInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
@ViewChild('somecontainer') newscont: ElementRef;
imgElmt: HTMLCollection;

  constructor() {}
  ngAfterViewInit(){
this.imgElmt = this.newscont.nativeElement.getElementsByTagName('ion-button');
 console.log(this.imgElmt);
for (var i=0;i++;i<this.imgElmt.length){
this.imgElmt[i].innerHTML+="<ion-label>"+this.imgElmt[i].getAttribute("aria-label")+"</ion-label>";

}

  }
parameterize (str1:any) {
    // Trim leading and trailing whitespace, convert to lowercase, and replace non-alphanumeric characters with an empty string
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
  myassistant($ev:any){
    var x=$ev.target.getAttribute("aria-label")
    window.location.pathname="/voirtout/"+this.parameterize(x);
  }

}
