<template>
  <div>
    <div class="Note p-2" :class="{'Note__fixed': Note.Fixed, 'Note__active': Note.id === isActive}">
      <b class="Note__title">{{Note.Title}}</b>     
      <button v-if="!Note.Fixed" class=" Note__zacrep btn btn-outline-secondary"><Icon  name="mdi-light:pin"/></button>
      <button v-if="Note.Fixed" class=" Note__zacrep btn btn-outline-secondary"> <Icon  name="mdi-light:pin-off"/></button>
    </div>
  </div>
</template>

<script >

  export default {
      data() {
        return {
          Notes: this.Note
        }
      },
      mounted() {
      },
      props: ['Note', 'isActive'],      
      components: {
        
      }
  }
</script>

<style>
  .Note {
    padding: .5rem 1.3rem;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: .7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Note:hover {
    /* background: var( --acent5); */
    box-shadow: 0 0 1px 1px var(--acent4);
  }
  .Note__fixed {
    border: 1px solid var(--acent5);
  }
  .Note__fixed:hover {
    box-shadow: 0 0 1px 1px var(--acent4);
  }
  .Note__active {
    box-shadow: 0 0 1px 1px var(--acent4);
    background: var(--acent4);
  }
  .Note__zacrep span {
    transform: rotate(90deg);
    font-size: 1.5rem;
    cursor: pointer;
  }
  .Note__zacrep {
    align-items: center;
    display: flex;
    height: 45px;
    justify-content: center;
  }
  .Note__title {
  
  }
  .Note__content {
  
  }

  .Note:hover {
    /* background: var(--acent4) */
  }
  .note {

  }
  
  @media screen and (max-width: 600px) {

  }
</style>