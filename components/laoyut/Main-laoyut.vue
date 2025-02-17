<template>
    <div>
        <Header></Header>
        <main class="container">
            <slot></slot>
        </main>
        <Footer></Footer>
        <div id="modal_massage"></div>
    </div>
</template>

<script>
import Header from '@/components/HeaderFooter/Header';
import Footer from '@/components/HeaderFooter/Footer';

 export default {
        components: {
            'Header': Header,
            'Footer': Footer
        }
    }
</script>

<style>
    html, body, #__nuxt {
        height: 100%;
    }
    #__nuxt {
        /* display: grid;
        grid-template-rows: 1fr 1fr 100px; */
    }

    main {
        margin: 3rem auto;
        max-width: var(--them-width);
        padding: 3rem 0;
    }
    /* переходы */
    .page-enter-active,
    .page-leave-active {
        transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        filter: blur(1rem);
    }
</style>