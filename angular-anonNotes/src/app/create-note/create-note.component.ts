import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from './note';
import { NoteApiService } from './../note-api.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  @Output() aTaskEventEmitter = new EventEmitter();

  new_note = new Note();
  notes = [];

  constructor(private _noteApiService: NoteApiService) { }
  triggerEvent(){
    //  3 Emit the Event
    this.aTaskEventEmitter.emit(this.notes); //we can pass in any data type
  }


  ngOnInit() {
  }

  onSubmit(){
    //hit service
    console.log("before this note",this.new_note);
    this._noteApiService.createNote(this.new_note, (res) => { //callback is here
      
      console.log(this.new_note)
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
    console.log("this note",this.new_note);
    this.new_note = new Note();
    console.log("cleared this note",this.new_note);


    //Filling up array so we can send to parent to send to show notes
    console.log("before this note",this.notes);
    this._noteApiService.showNotes((res) => { //callback is here
      this.notes = res
      this.triggerEvent();
      console.log(this.notes)
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
    console.log("this notes array filled up",this.notes);
  }

}
