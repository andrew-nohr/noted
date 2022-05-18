const fs = require('fs');
const path = require('path');
const data = require('../Develop/db/db.json')



function createNewNote(body, data){
    const note = body;

    data.push(note)
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({ data }, null, 2)
    )
    return note;
};




module.export = createNewNote;