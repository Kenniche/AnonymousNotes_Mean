export class Note {
    constructor(
      public id: string = "",
      public note_content: string = "",
      public created_at: Date = new Date(),
      public updated_at: Date = new Date()
    ){}
  }