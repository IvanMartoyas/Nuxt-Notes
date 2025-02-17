<template>
  <div>
    <form class="fullNote" @submit.prevent="save()">
      <header class="row">
        <div class="col-10 d-flex align-middle">
          <CustomInput :saveButton="true" :inputType="'text'" :data="Note.Title" @CloseEdit="CloseEditFild"></CustomInput>
        </div>
        <div class="col-2 d-flex justify-content-end">
          <ButtonDelete :id="Note.id" @delete_note="$emit('delete_note',id)"></ButtonDelete>
        </div>
        <div class="col-12"><Images-List :Images="Note.Img"></Images-List> </div> 
      </header>

      <CustomInput  class="fullNote__borderTop" :inputType="'textarea'" :data="Note.Content" @CloseEdit="CloseEditFild"></CustomInput>
      
      <footer class="fullNote__footer d-flex gap-4 p-4" v-if="Note.date">
        <div v-if="Note.date"><b>Время:</b> {{ Note.date.time }}</div>
        <div v-if="Note.date"><b>Дата:</b> {{ Note.date.day }} / {{ Note.date.Month }} / {{ Note.date.Year }}</div>
      </footer>
      
    </form>
  </div>
</template>

<script>

import CustomInput from '~/components/UI/Inputs/CustomInput.vue';
import ImagesList from '~/components/Notes/Images/ImagesList.vue';
import ButtonDelete from './ButtonDelete';

  export default {
    props: ['note'],
    data() {
      return {
        Note: this.note,
      }
    },
    methods: {
      save() {

      },
      CloseEditFild (value) {

      },
      delete_note(id) {
        this.$emit('delete_note',id)
      }
    },
    components: {
     'CustomInput': CustomInput,
     'Images-List': ImagesList,
      ButtonDelete,
       
    },
    computed: {
      Note() {
        return this.note
      },
  
    }
  }
</script>

<style lang="scss">
  .fullNote {
    position: relative;
    // height: 100%;
    // display: grid;
    // grid-template-rows: 1fr 9fr;
    input {
      border: 1px solid var(--acent5);
      padding: .5rem 1rem;
    }
    &__title {
      font-size: 2rem;
      font-weight: 700;
    }
  }
  .fullNote__footer {
    background: var(--acent4);
  }
  .fullNote__borderTop {
    border-top: 1px solid var(--acent3);
    padding-top: .5rem;
    margin-top: .5rem;
  }
</style>