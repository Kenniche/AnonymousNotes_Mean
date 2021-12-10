import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { NoteApiService } from './note-api.service'; // <-- Imported



import { OrderbyPipe } from './orderby.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    ShowNotesComponent,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [NoteApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
