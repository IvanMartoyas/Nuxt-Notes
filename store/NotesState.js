import { defineStore } from 'pinia'
import { ModelNotes } from '~/server/Model/Notes-Model';

export const useNoteState = defineStore('NoteState',{
  id: 'NotesState',
  state: () => ({
      NOTES: ModelNotes.getAll(),
  }),
  actions: {
    setNotes(_notes) {
      this.NOTES = _notes;
    }
  },
  mutations: {
    newValueNotes(state, newData) {
      state.NOTES = newData
    }
  },
  getters: {
    getNotes: (state) => state.NOTES,
  }
})
