import { NotesController } from '../../../Controllers/Notes-Controller';
// этот файл обрабатывает основные роуты для заметок



export default defineEventHandler( async (event) => {

   var body = await readBody(event);
   body = body.body;
   const name = getRouterParam(event, 'name')
   console.log('name route ',name)
  const action = body.action;

  switch(action) {
    case 'getall': 

      let result = NotesController.getAll()
      //  console.log("result ",result)
      return result;
    break;
    case 'find': 
      return 'select';
    break;
    case 'create': 
      return NotesController.createNote(body.note);
    break;
    case 'update': 
      return 'add';
    break;
    case 'delete': 
      
      return 'sucsess deleted '+ JSON.stringify(NotesController.Delete(body.id));
    break;
    case 'historyNext': 
      return 'add';
    break;
    case 'historyPrev': 
      return 'add';
    break;
    default: return 'undefined';
  }

  return `notes, ${name}, body: ${body}`;
})