<template>
    <div class="breadcrumb center">
        <ul class="breadcrumb__ul">
            <li class="breadcrumb__li">
                <router-link to="./" class="breadcrumb__link">
                    ГЛАВНАЯ
                </router-link>
            </li>
            <li class="breadcrumb__li"> <router-link to="/bakery" class="breadcrumb__link">
                    ВЫПЕЧКА
                </router-link>
            </li>
        </ul>
    </div>
    <section class="description center">
        <div>
            <h2 class="about__title description">Выпечка</h2>
            <p class="about__text description">
                Эта категория оказалась самой сложной для меня. Попить чай с печенькой - это целый ритуал. То что в
                продают в магазинах и здоровым то людям есть не стоит.
                Пшеничную муку заменила мукой зеленой гречки. В качестве подсластителя - мед, финики, сухофрукты,
                фрукты.
                Все орехи вымачиваю в холодной воде не менее 4 часов.
            </p>
        </div>
    </section>
    <div class="recipe center">
        <article class="recipe__item" v-for="bakery in getRecipeCategory('bakery')" :key="bakery.id">
            <div class="recipe__el">
                <img class="recipe__img" :src="bakery.img" alt="recipe">
                <ul class="recipe__title">Понадобится:
                    <li class="recipe__text" v-for="ingr in bakery.ingredients" :key="ingr.id">
                        {{ ingr.name }} - <nobr>{{ ingr.count }} {{ ingr.unit }}</nobr>
                    </li>
                </ul>
            </div>
            <h3 class="recipe__name" href="#">{{ bakery.name }}</h3>
            <details class="recipe__details">
                <summary class="recipe__summary">Как приготовить</summary>
                <p class="recipe__description">{{ bakery.description }}</p>
            </details>
            <button class="recipe__button" @click="addToCart(bakery.id, getRecipeCategory('bakery'))">{{ message
                }}</button>
        </article>

    </div>
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