<template>

  <div class="imgFullModal">
    <div class="imgFullModal__wrapper">
      <div class="modal-backdrop" @click.stop.prevent="$emit('Close')" v-if="backDrop"></div>
      <div class="imgFullModal__content" @click.stop.prevent="$emit('Close')">
          <div class="imgFullModal__body">
             <img :src="img.data" :alt="img.name">
             <div class="topPanel">
              <div class="d-flex gap-3">
                <b class="mb-3 mb-md-0">{{ img.name.split('.',[1])[0] }}</b>
              </div>
             </div>
             
          </div>
      </div>
    </div>
  </div>
</template>
  
<script> 
  
  export default {
      props: {
        img: {
          default: undefined
        },
        backDrop: {
            type: Boolean,
            default: true
        }
      },
      data() {
        return {
   
            loader: false
        }
      },
      mounted() {
       
      }
  }
  </script>
  
  <style lang="scss" scoped>
  .show { 
      display: block
  }
  .modal-backdrop {
     background-color: #2b2b2bc4;
     z-index: 999;
  }
  .imgFullModal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-items: center;
    justify-content: center;
  }
  .imgFullModal__wrapper {
    height: 80vh;
    width: 80%;
    margin-top: 10vh;
    padding: 0 1rem;
  }
  .topPanel {
    position: absolute;
    background: var(--acent5);
    color: var(--acent1);
    width: 100%;
    padding: 1rem;
    left: 0;
    bottom: 0;
  }
  .imgFullModal__body {
    height: 100%;
  }
  .imgFullModal__content {
    height: 100%;
    z-index: 99999;
    position: relative;
    background: var(--acent0);
    color: var(--acent5);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 768px) {

  }
  </style>