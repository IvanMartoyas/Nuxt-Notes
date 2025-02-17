import { Utilits } from '../Utilits/Utilits';
import { NotesV2 } from './Store';
// const sqlite3 = require('sqlite3');


class Modelnotes {

    history = [];

    createNote(note_object) {

        // делаю запись в базу NOTESV2
        if(NotesV2.push(note_object)) {
            return {
                status: '200',
                textStatus: 'Запиь создана успешно',
                ...note_object
            }
        
        } else {
            return {
                status: '500',
                textStatus: 'Не удалось создать',
                ...note_object
            }
         
        }
        // return NotesV2.push(note_object);

    }
    async getAll() {

        // let db = new sqlite3.Database(__dirname+'/../database/db.sqlite',sqlite3.OPEN_READWRITE,function(err){
        //     if(err){
        //         console.log(__dirname);
        //         console.log(err);
        //     }
        // });
        
        // const usersmodel = require(__dirname+'/../models/users.js');
    
        //     const usersdb = new usersmodel(db);
        //     const users = await usersdb.findUsers();
        //     console.log('users DB', users)
        
        return NotesV2;
    }

    Delete(id) {
        // console.log("delete id = ", id)
        let NOTESV2 = Utilits.array_Delete_By_id(NotesV2, id)
        console.log('delte model ',NOTESV2)
        return NOTESV2;
    }
}


export var ModelNotes = new Modelnotes();