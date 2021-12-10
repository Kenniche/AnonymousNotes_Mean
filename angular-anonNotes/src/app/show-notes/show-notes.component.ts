import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Note } from './../create-note/note';
import { NoteApiService } from './../note-api.service';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent implements OnInit, OnChanges {

  @Input() notes;

  constructor(private _noteApiService: NoteApiService) { }

  ngOnInit() {
    //hit service
    console.log("before this note",this.notes);
    this._noteApiService.showNotes((res) => { //callback is here
      this.notes = res
      console.log(this.notes)
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
    console.log("this notes array filled up",this.notes);
  }

  ngOnChanges() {

  }
}
