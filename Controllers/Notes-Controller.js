import { ModelNotes } from "../Model/Notes-Model";
import { actionsNote } from "../Model/Store"; // список статусов для сохранений в истории



class notesController {

    constructor() {

    }

    getAll () {          
        return ModelNotes.getAll();
    }
    find () {
        return null;
    }
    createNote (_data) {
      
        // генерирую id и к каждой заметки буду прикреплять время создания и историю
        let data   = new Date();
        let id     = data.getTime();
        let Day    = data.getDate();
        let Time   = data.getHours()+':'+data.getMinutes();
        let Month  = data.getMonth();
        let Year   = data.getFullYear();

        let date = {
            time:  Time,
            day:   Day,
            Month: Month,
            Year:  Year,
        };

        // записываю заметку со статусом 
        let history = [
            {
                id: 'history_'+data.getTime(),
                action: actionsNote.created,
                date: date,
            }
        ];

        let Create_Note = {
            id:      id,
            Title:   _data.Title,
            Content: _data.Content,
            Fixed:   _data.Fixed,
            date: date,
            history: history,
            Img: _data.Img
        };

        try {
            console.log("add note ", Create_Note)
            return ModelNotes.createNote(Create_Note);
        } catch (e) {
            console.console.warn('Notes-Controller ошибка создания заметки ', e.massage);
            return null;
        }
       

       
    }
    update () {
        return null;
    }
    Delete (id) {
        try {
            return ModelNotes.Delete(id);
            // return true;
        } catch (e) {
            console.warn('Notes-Controller ошибка удаления заметки ', e.massage);
            return null;
        }
        return null;
    }
    historyNext () {
        return null;
    }
    historyPrev () {
        return null;
    }


}

export const NotesController = new notesController();