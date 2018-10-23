console.log('Starting app.')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs
    .command('add','Add a new note', {
        title:{
            describe: 'Title of note',
            demmand: true
        }
    })
    .help()
    .argv

let command = argv._[0]
console.log(`Command: ${command}`)
console.log('Process',process.argv)
console.log('Yargs',yargs.argv)

if(command === 'add'){
    let note = notes.addNote(argv.title, argv.body)
    notes.showNote(note)
} else if(command === 'list'){
    let allNotes = notes.getAll()
    console.log(`Printing ${allNotes.length} note(s)`)

    allNotes.forEach(note => notes.showNote(note))
}else if(command == 'read'){
    let note = notes.getNote(argv.title)
    notes.showNote(note)
}else if(command == 'remove'){
    let noteRemoved = notes.remove(argv.title)
    let message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message)
}else{
    console.log('Command not reconized')
}