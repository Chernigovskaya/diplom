<template>
    <div class="breadcrumb center">
        <ul class="breadcrumb__ul">
            <li class="breadcrumb__li">
                <router-link to="./" class="breadcrumb__link">
                    ГЛАВНАЯ
                </router-link>
            </li>
            <li class="breadcrumb__li"> <router-link to="/soup" class="breadcrumb__link">
                    СУПЫ
                </router-link>
            </li>
        </ul>
    </div>
    <section class="description center">
        <div>
            <h2 class="about__title description">Супы</h2>
            <p class="about__text description">
                Готовлю супы с большим количеством мяса и овощей. Особенно они выручают при плохом самочувствии,
                буквально
                за пару дней могут постовить на ноги. Когда обостряется кишечник, то бульоны с мясом (без добавления
                картофеля) - это моя основная еда.
                Также суп приятно согреет и насытит организм в холодные дни.

            </p>
        </div>
    </section>
    <div class="recipe center">
        <article class="recipe__item" v-for="soup in getRecipeCategory('soup')" :key="soup.id">
            <div class="recipe__el">
                <img class="recipe__img" :src="soup.img" alt="recipe">
                <ul class="recipe__title">Понадобится:
                    <li class="recipe__text" v-for="ingr in soup.ingredients" :key="ingr.id">
                        {{ ingr.name }} - <nobr>{{ ingr.count }} {{ ingr.unit }}</nobr>
                    </li>
                </ul>
            </div>
            <h3 class="recipe__name" href="#">{{ soup.name }}</h3>
            <details class="recipe__details">
                <summary class="recipe__summary">Как приготовить</summary>
                <p class="recipe__description">{{ soup.description }}</p>
            </details>
            <button class="recipe__button" @click="addToCart(soup.id, getRecipeCategory('soup'))">{{ message }}</button>
        </article>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
export default {
    name: "SoupComponent",
    computed: {
        ...mapGetters(['getRecipeCategory']),
        ...mapState(['message'])
    },
    methods: {
        ...mapActions(['addToCart']),
    }
}
</script>

<style lang="scss" scoped></style>