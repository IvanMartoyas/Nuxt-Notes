<template>
    <header class="header">
      <div class="header__middle">
        <NuxtLink to="/" class="logo"><Icon name="mdi-light:home" style="color: black" /></NuxtLink>
        <nav class="menu">
            <div class="menu__wrapper">
                <ul>
                    
                    <li><NuxtLink to="/notes/add">добавить</NuxtLink></li>
                    <li><NuxtLink to="/notes/notes">просмотреть</NuxtLink></li>
                    <li><NuxtLink to="/notes/edit/312">Редактировать</NuxtLink></li>
                    <li><NuxtLink to="/Update">Обновление</NuxtLink></li>
                    
                </ul>
            </div>

        </nav>
        <button class="header__moibileB" @click.prevent="toobleMenu"><Icon name="mdi-light:menu" style="color: black" /></button>
      </div>
    </header>
</template>

<script>
    export default {
        methods: {
            dasta() {
                return {
                    tooble: false
                }
            },
            toobleMenu() {
                this.tooble = !this.tooble;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        background: var(--acent4);
        padding: 0 .8rem;
    }
    .header__middle {
        max-width:var(--them-width);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
        padding: .5rem 0;
           
    }
    .logo span {
        font-size: 2.5rem;
    }
    .menu {

        ul {
            display: flex;
            justify-content: start;
            align-items: center;
            // gap: .7rem;
        }
        a {
            display: block;
            padding: .5rem 1.4rem;
            color: var(--acent1);
        }
    }
    .header__moibileB span{
        font-size: 2rem;
    }
</style>