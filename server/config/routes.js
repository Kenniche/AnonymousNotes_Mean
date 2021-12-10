var notes = require('../controllers/notes.js')

module.exports = function(app) {
    // Routes

    // Retrieve all Notes
    app.get('/notes', function(req, res) {
        notes.showAll(req, res)
    })
    // Create a Notes
    app.post('/notes', function(req, res) {
        console.log("-------------------------------inside server route req",req.body);
        notes.newNote(req, res);
    })





    // Retrieve a Notes by ID
    app.get('/notes/:id', function(req, res) {
        notes.showNote(req, res)
    })
    // Update a Notes by ID
    app.put('/notes/:id', function(req, res) {
        notes.updateNote(req, res)
    })
    // Delete a Notes by ID
    app.delete('/notes/:id/', function(req, res) {
        notes.deleteNote(req, res)
    })



    // Be sure to put as final route so if none of these match we go to Angular routes
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./angular-anonNotes/dist/index.html"))
    });
}
