// var obj = {
//     name: 'Raphael'
// };

// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)

// var personString = '{"name":"Raphael", "age": 30}'
// var person = JSON.parse(personString);

// console.log(typeof person)
// console.log(person)


const fs = require('fs')

let originalNote = {
    title: 'Some title',
    body: 'Some body'
}

let originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteString);

var notesString = fs.readFileSync('notes.json')
var notes = JSON.parse(notesString)

console.log(typeof notes)
console.log(notes.title)