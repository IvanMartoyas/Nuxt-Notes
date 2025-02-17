<template>
   <div v-if="loader">
    <h1>Заметки</h1>
    <div class="ListNotes__panel row">
        <div class="mb-3 mb-md-0 col-12 col-md-4">
          <div class="ListNotes__left">
            <!-- 
              вывод 
              1 поиск
              2 остортированные по закреплённости
              3 все остальные кто не закреплённые
            -->
            <Filter-Notes 
              :OldData="listNotes" 
              @find-active="(val)=>{searchFind = val}" 
              @find-data="(array)=>{findNoteArray = array}"
              class="pr-1 pl-1 mb-1 pb-2"
            ></Filter-Notes>
            <div v-if="searchFind">
              <Note :Note="Note" :isActive="active_id" v-for="Note in findNoteArray"   :key="Note" @click="selectedNote(Note)"></Note>
            </div>
            <div v-else>
              <Note :Note="Note" :isActive="active_id" v-for="Note in fixedsArray"   :key="Note" @click="selectedNote(Note)"></Note>
              <Note :Note="Note" :isActive="active_id" v-for="Note in noFixedsArray" :key="Note" @click="selectedNote(Note)"></Note>
            </div>
          </div>
        </div>
        <div class="mb-3 mb-md-0 col-12 col-md-8 ">
          <Full-Notes class="ListNotes__right card" :note="selectedNoteForEdit" @delete_note="Delete_note"></Full-Notes>
        </div>
    </div>
   </div>
</template>

<script>
  import Note from '~/components/Notes/Note.vue';
  import FilterNotes from './Filter-Notes.vue';
  import FullSizeNotes from '~/components/Notes/FullSizeNotes.vue';
  import axios from 'axios';

  export default {
      data() {
        return {
          loader: false,
          selectedNoteForEdit: {},
          listNotes: [], // хранит все заметки без сортировки
          noFixedsArray: [],
          fixedsArray: [],
          active_id: 1,

          // поиск
          searchFind: false, // нашол ли чего поиск
          findNoteArray: []
        }
      },
      async mounted() {
           
          let response = await this.loadNotes();

             // console.log("result ", response.data );

          // делаю активным первый элемент
          this.selectedNoteForEdit = response.data[0];
          this.active_id = response.data[0].id;
          this.listNotes = response.data;
       

          this.fixedsArray = response.data.filter((note) => {
            if(note.fixed === true) {
              return note;
            } else {
              this.noFixedsArray.push(note);
            }
          });

          this.loader = true;
      },
      methods: {
        selectedNote(Value) {
          this.active_id = Value.id;
          this.selectedNoteForEdit = Value;
        },
        async Delete_note(id) {
         
          console.log("delete note, id note ",id);
        },
        async loadNotes() {
          return await axios.post('/api/v1/notes/getall', {
              body: {
                action: 'getall'
              },
          });
        }
      },
      components: {
        Note,
        'Full-Notes': FullSizeNotes,
        'Filter-Notes': FilterNotes,
      },
      computed: {
        ListNotes() {
          return this.listNotes;
        },
        NotesArray() {
          return useState('x');
        }
      }
  }
</script>
<style>
  .ListNotes {
    
  }
  .ListNotes__panel {
    /* display: grid;
    grid-template-columns: 350px 1fr; */
    /* gap: 1rem; */
    /* margin: .7rem 0; */
  }
  .ListNotes__left {
    max-height: 350px;
    overflow-y: auto;
  }
  .ListNotes__right {
    border: 1px solid var(--acent5);
    padding: 1rem;
  }
</style>