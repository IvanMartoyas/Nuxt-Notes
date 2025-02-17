<template>
<div>
    <Laoyut-Main>
        <NuxtPage />
    </Laoyut-Main>
</div>
</template>
<script>
import laoyutMain from '@/components/laoyut/Main-laoyut.vue';

 export default {
        components: {
            'Laoyut-Main': laoyutMain
        }
    }
</script>
<style>
    @import './node_modules/bootstrap//dist/css/bootstrap.min.css';
    @import './assets/basic.css';
</style>
