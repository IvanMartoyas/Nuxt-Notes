<template>

<div>
    <div class="modal-backdrop" @click.stop.prevent="$emit('Close')" v-if="backDrop"></div>
    <div class="modalSmall" @click.stop.prevent="$emit('Close')">
        
        <div class="modalSmall__body">
            <span>{{text}}</span>
        </div>
        <div class="modalSmall__loader">
            <div 
                v-if="loader"
                class="modalSmall__loaderValue" 
                :style="{
                    width: 100+'%',
                    transition: dalay+ 's',
                }"
            ></div>
        </div>
    </div>
</div>
</template>

<script>


export default {
    props: {
        text: {
            type: String,
            default: '',
        },
        backDrop: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            dalay: 2,
            loader: false
        }
    },
    mounted() {
        this.loader = true;
        let _this = this;
        setTimeout(()=>{
            _this.$emit('Close');
        },  this.dalay * 1000)
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
.modalSmall {
    background: var(--acent0);
    color: var(--acent4);
    max-width: 300px;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: .5rem 1.5rem;
    padding-bottom: .8rem;
    z-index: 9999;
    cursor: pointer;
}
.modalSmall:hover {
    box-shadow: 0 0 5px 0px #535353;
}
.modal-backdrop {
}
.modalSmall__body {

}
.modalSmall__loader {
    width: 100%;
    height: 4px;
    background: var(--acent3);
    position: absolute;
    bottom: 0;
    left: 0;
}

.modalSmall__loaderValue {
    width: 0;
    height: 4px;
    background: var(--acent5);
    transition: 2s;
}

</style>