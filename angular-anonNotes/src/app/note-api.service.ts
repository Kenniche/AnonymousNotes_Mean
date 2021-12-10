import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported
import { Note } from './create-note/note';

@Injectable()
export class NoteApiService {

  notes = [];

  constructor(private _http: Http) { }

  createNote(note, callback, errorback) {
    this._http.post('/notes', note).subscribe( 
      (response) => { 
        callback(response.json());
       }, // <— first method
      (error) => { 
        errorback();
        console.log(error);
       } // <— second method
    );
  }

  showNotes(callback, errorback) {
    this._http.get('/notes').subscribe( 
      (response) => {
        this.notes = response.json();
        callback(this.notes);
       }, // <— first method
      (error) => { 
        errorback();
        console.log(error);
       } // <— second method
    );
  }



}
