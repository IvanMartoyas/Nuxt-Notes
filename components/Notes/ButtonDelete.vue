<template>

    <div class="fullNote__delete">
      <button @click="Delete(id)" class="btn btn-danger p-2 d-flex align-items-center ">
        <Icon name="mdi-light:delete" style="color: white"/>
      </button> 
    </div>
      <!-- id {{ id }} -->

</template>

<script>
import axios from 'axios';

  export default {
    props: ['id'],
    methods: {
      async Delete(_id) {
        let response = await axios.post('/api/v1/notes/delete', {
            body: {
              action: 'delete',
              id: _id,
            },
        });
        this.$emit("delete_note", {id: this.id});
        // console.log("delete response ",response)
      }
    }
  }
</script>

<style scoped>
  .fullNote__delete {
    /* min-height: 50px; */
  }
  .fullNote__delete span {
    font-size: 1.5rem;
  }
</style>