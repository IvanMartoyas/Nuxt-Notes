<template>
  <div>
   <div class="inputEditor"  v-if="Edit" >
       <div v-if="inputType == 'text'" class="inputEditor__text">
        <input type="text" v-model="Data" >
      </div>
      
      <div v-if="inputType == 'textarea'" class="inputEditor__text">
        <textarea 
          v-model="Data" 
        > </textarea>
      </div>

      <button v-if="saveButton" class="inputEditor__closeEdit" @click="CloseEdit()">Сохранить</button>
   </div>
    
    <div  class="fullNote__content"  @click="Edit = !Edit" v-if="!Edit" >{{ Data }}</div>

  </div>
</template>

<script>
export default {
    props: {
      inputType: {
        type: String,
        default: 'text'
      },
      data: {
        type: String,
        default: 'default'
      },
      saveButton: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        Edit: false,
        Data: this.data
      }
    },
    methods: {
      CloseEdit() {
        this.Edit = !this.Edit;
        this.$emit('CloseEdit', this.Data)
      }
    },
    computed: {
      Data() {
        return this.data;
      }
    },
  }
</script>

<style scoped lang="scss">
  .inputEditor {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: .8rem;
    height: 100%;
    &__closeEdit {
      // position: absolute;
      // right: 1rem;
      // top: 1rem;
    }

    input,textarea {
      width: 100%
    }
    
    textarea {
      height: 100%;
    }
  }
  .inputEditor__text {
    width: 100%;
  }
  .fullNote__content {
    // border-top: 1px solid var(--acent4);
  }
</style>