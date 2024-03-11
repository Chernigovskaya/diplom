<template>
        <div class="breadcrumb center">
        <ul class="breadcrumb__ul">
            <li class="breadcrumb__li">
                <router-link to="./" class="breadcrumb__link">
                    ГЛАВНАЯ 
                </router-link>
            </li>
            <li class="breadcrumb__li"> <router-link to="/garnish" class="breadcrumb__link">
                    ГАРНИРЫ
                </router-link>
            </li>
        </ul>
    </div>
    <section class="description center">
        <div>
            <h2 class="about__title description">Гарниры</h2>
            <p class="about__text description">
                В качестве гарниров в основном использую запеченные овощи или гречку. Остальное намного реже (рис бурый,
                пшено, картофель, макароны безглютеновые). Обязательно все
                крупы замачиваю на несколько часов, а лучше на ночь, чтобы вымыть *лектины. Еще читала, что для
                удаления лектинов из продуктов очень хорошо подходит пароварка, но я пока обхожусь без нее.
                Картофель нарезаю купиками, промываю и так же замачиваю перед варкой. Воду, перед приготовлением, меняю на
                чистую. Черед подачей на стол в тарелку добавляю ложку оливкового масла.
            </p>
            <p class="star_text">*Лектины — белки, которые «склеивают» углеводы. С их помощью
                растения «обороняются» от тех, кто их поедает: насекомых, животных и людей.
                Попав в организм «поедателей», они мешают усвоению минералов и нарушают
                межклеточную коммуникацию.</p>
        </div>
    </section>
    <section class="recipe center">
        <article class="recipe__item" v-for="garnish in getRecipeCategory('garnish')" :key="garnish.id">
            <div class="recipe__el">
                <img class="recipe__img" :src="garnish.img" alt="recipe">
                <ul class="recipe__title">Понадобится:
                    <li class="recipe__text" v-for="ingr in garnish.ingredients" :key="ingr.id">
                        {{ ingr.name }} - <nobr>{{ ingr.count }} {{ ingr.unit }}</nobr>
                    </li>
                </ul>
            </div>
            <h3 class="recipe__name" href="#">{{ garnish.name }}</h3>
            <details class="recipe__details">
                <summary class="recipe__summary">Как приготовить</summary>
                <p class="recipe__description">{{ garnish.description }}</p>
            </details>
            <button class="recipe__button" @click="addToCart(garnish.id, getRecipeCategory('garnish'))">{{ message }}</button>
        </article>
    </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
export default {
   
    name: "GarnishComponent",
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