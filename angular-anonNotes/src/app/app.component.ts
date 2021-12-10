import { Component } from '@angular/core';
import { Note } from './create-note/note';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notes = [];
  
  constructor() { }
  dataFromChild(eventData){
    console.log(eventData);
    this.notes = eventData;
    console.log("ended up in parent*****",this.notes);
  }

}
