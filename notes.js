console.log('Starting nodes.js')

const fs = require('fs')
const nameArchive = 'notes-data.json'

let fetchNotes = () => {
    try{
        let notesString = fs.readFileSync(nameArchive)
        return JSON.parse(notesString)    
    }catch(e){
        return []
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync(nameArchive, JSON.stringify(notes))
}

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    }
    let duplicateNotes = notes.filter(note => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note)
        saveNotes(notes)
        return note;
    }
}

let getAll = () => {
    return fetchNotes()
}

let getNote = (title) => {
    var notes = fetchNotes()
    return notes.filter(x => x.title === title)[0]
}

let remove = (title) => {
    let notes = fetchNotes()
    let filteredNotes = notes.filter(x => x.title !== title)
    saveNotes(filteredNotes)

    return notes.length !== filteredNotes.length
}

let showNote = note => {
    if(note){
        console.log('Note')
        console.log('~~')
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
    }else{
        console.log('Note title taken')
    }
}

module.exports = {
    addNote,
    getAll,
    getNote,
    remove,
    showNote
}
