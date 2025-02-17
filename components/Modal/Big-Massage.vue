<template>

<div class="modal fade show" id="Modal-as"  tabindex="-1" aria-labelledby="Modal" aria-hidden="true">
    <div class="modal-backdrop" @click.stop.prevent="$emit('Close')"></div>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Заголовок</h3>
                <button type="button" @click="$emit('Close')" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>{{text}}</p>
        
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="$emit('Close')" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
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
        }
    },
}
</script>

<style lang="scss" scoped>
.show { 
    display: block
}
.modal-backdrop {
   background-color: #2b2b2bc4;
   z-index: -1;
}
</style>