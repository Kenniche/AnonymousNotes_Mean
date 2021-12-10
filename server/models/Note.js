var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    note_content:  { type: String, required: true, minlength: 3},
}, {timestamps: true });

mongoose.model('Note', NoteSchema);
var Note = mongoose.model('Note')

// Use native promises, possibly not needed
mongoose.Promise = global.Promise;