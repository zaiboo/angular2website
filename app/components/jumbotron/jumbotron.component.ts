import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent {
   private jbtHeading:string;
   private jbtText:string;
   private jbtBtnText:string;
   private jbtBtnUrl:string;
   
   constructor(){
       this.jbtHeading="Your Heading Goes Here";
       this.jbtText = "This is a simple Angular 2 Website with Bootstrap Jumbotron page header and pages Routing functionality.";
       this.jbtBtnText = "Read More";
       this.jbtBtnUrl="/about";   
   }
}
