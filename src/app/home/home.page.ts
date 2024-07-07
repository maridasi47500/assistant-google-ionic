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
  myassistant($ev:any){
	  console.log($ev.target);
    //var shadow=$ev.target.shadowRoot.children[0];
    //console.log(shadow);
    var z = ($ev.target as HTMLElement);
    console.log(z.tagName);
    //console.log(z.getAttribute("tagName"));

    if(z.tagName === "SPAN"){
    var y = ($ev.target.parentElement as HTMLElement).getAttribute("aria-label");
    }else if (z.tagName === "ION-ICON"){
    var y = ($ev.target.parentElement as HTMLElement).getAttribute("aria-label");
    }else{
    var y = ($ev.target as HTMLElement).getAttribute("aria-label");
    }
    window.location.pathname="/make-search/"+this.parameterize(y);
    return false;
  }
  ngAfterViewInit(){
this.imgElmt = this.newscont.nativeElement.getElementsByTagName('a');
 console.log(this.imgElmt);
for (var i=0;i++;i<this.imgElmt.length){
this.imgElmt[i].innerHTML+="<ion-label>"+this.imgElmt[i].getAttribute("aria-label")+"</ion-label>";

}
  }

parameterize (str1:any) {
    // Trim leading and trailing whitespace, convert to lowercase, and replace non-alphanumeric characters with an empty string
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};


}
