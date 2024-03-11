<template>
    <div class="breadcrumb center">
        <ul class="breadcrumb__ul">
            <li class="breadcrumb__li">
                <router-link to="./" class="breadcrumb__link">
                    ГЛАВНАЯ
                </router-link>
            </li>
            <li class="breadcrumb__li"> <router-link to="/salad" class="breadcrumb__link">
                    САЛАТЫ
                </router-link>
            </li>
        </ul>
    </div>
    <section class="description center">
        <div>
            <h2 class="about__title description">Салаты</h2>
            <p class="about__text description">
                Здесь можно раскрыть все свое воображение и сочетать несочетаемое. Любая зелень, почти все овощи,
                фрукты, орехи, семечки, заправка из оливкового масла.
                Если кишечнику пока не нравятся сырые овощи, то нужно начать с отварных.
                Но овощи обязательно должны быть в рационе. Со временем, сырые овощи и зелень не будут доставлять
                никакого дискомфорта.
            </p>
        </div>
    </section>
    <section class="recipe center">
        <article class="recipe__item" v-for="salad in getRecipeCategory('salad')" :key="salad.id">
            <div class="recipe__el">
                <img class="recipe__img" :src="salad.img" alt="recipe">
                <ul class="recipe__title">Понадобится:
                    <li class="recipe__text" v-for="ingr in salad.ingredients" :key="ingr.id">
                        {{ ingr.name }} - <nobr>{{ ingr.count }} {{ ingr.unit }}</nobr>
                    </li>
                </ul>
            </div>
            <h3 class="recipe__name" href="#">{{ salad.name }}</h3>
            <details class="recipe__details">
                <summary class="recipe__summary">Как приготовить</summary>
                <p class="recipe__description">{{ salad.description }}</p>
            </details>
            <button class="recipe__button" @click="addToCart(salad.id, getRecipeCategory('salad'))">{{ message
                }}</button>
        </article>
    </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
export default {
    name: "VtoroeComponent",
    computed: {
        ...mapGetters(['getRecipeCategory']),
        ...mapState(['message'])
    },
    methods: {
        ...mapActions(['addToCart']),
    },

}
</script>

<style lang="scss" scoped></style>