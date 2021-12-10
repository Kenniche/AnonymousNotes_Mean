var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    showAll: function(req, res) {
        Note.find({}, function(err, notes) {
            if(err) {
                console.log("didn't get note data");
                // res.send('did not work');
            } else {
                console.log("got note data");
                res.json(notes);
            }
        })
    },
    newNote: function(req, res) {
        console.log("name from URL", req.body);
        Note.create(req.body, function(err, note) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong saving user');
                console.log(err.errors);
                // res.send({errors: note.errors});
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a Note!', note);
                // res.send('added a note!'+note);
            }
        })
    },






    showNote: function(req, res) {
        console.log("note id-----"+"ObjectId('"+req.params.id+"')")
        // Fish.find({_id:"ObjectId('"+req.params.id+"')"}, function(err, fishies) {
        Note.findOne({_id: req.params.id}, function(err, note) {
            if(err) {
                console.log("didn't get note data");
                res.send('can not show note');
            } else {
                console.log("got note data", note);
                res.json(note);
            }
        })
    },
    updateNote: function(req, res) {
        console.log("POST DATA-----", req.body);
        console.log("ID", req.params.id);
        // Fish.findOne({_id:req.params.id}, function(err, fishy) {
        //     fishy.name = req.body.name;
        //     fishy.length = req.body.length;
        //     fishy.save(function(err){
        //         if(err) {
        //             console.log('something went wrong saving user');
        //             console.log(fishy.errors);
        //             res.render('/', {errors: fishy.errors});
        //         } else { // else console.log that we did well and then redirect to the root route
        //             console.log('successfully updated a fish!');
        //             res.redirect('/');
        //         }
        //     })    
        // })
    // try another way with update method instead:
        Note.update({_id:req.params.id}, req.body, function(err, note) {
            if(err) {
                console.log('something went wrong saving note');
                console.log(err.errors);
                res.send(err.errors);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully updated a note!');
                res.send('updated a note!'+note);
            }
        })
    },
    deleteNote: function(req, res) {
        console.log("ID", req.params.id);
        Note.remove({_id: req.params.id}, function(err) {
            if(err) {
                console.log('something went wrong deleting a note');
                console.log(err.errors);
                res.send(err.errors);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully deleted a note!');
                res.send('deleted TAsk:'+req.params.id);
            }
        })
    }
}