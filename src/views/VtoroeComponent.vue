<template>
        <div class="breadcrumb center">
        <ul class="breadcrumb__ul">
            <li class="breadcrumb__li">
                <router-link to="./" class="breadcrumb__link">
                    ГЛАВНАЯ 
                </router-link>
            </li>
            <li class="breadcrumb__li"> <router-link to="/vtoroe" class="breadcrumb__link">
                    ВТОРОЕ 
                </router-link>
            </li>
        </ul>
    </div>
    <section class="description center">
        <div >
            <h2 class="about__title description">Второе</h2>
            <p class="about__text description">
                Стараюсь еду тущить или запекать, обжариваю в основном на сухой сковороде или с добавлением воды, но если надо добавить масло - только оливковое extra virgin, буквально несколько капель.
                
            </p>
        </div>
    </section>
    <div class="recipe center" >
        <article class="recipe__item" v-for="vtoroe in getRecipeCategory('vtoroe')" :key="vtoroe.id">
            <div class="recipe__el">
                <img class="recipe__img" :src="vtoroe.img" alt="recipe">
                <ul class="recipe__title" >Понадобится:
                    <li class="recipe__text" v-for="ingr in vtoroe.ingredients" :key="ingr.id"> 
                        {{ingr.name}} - <nobr>{{ ingr.count }} {{ingr.unit}}</nobr>
                    </li>
                </ul>
            </div>
            <h3 class="recipe__name" href="#">{{ vtoroe.name }}</h3>
            <details class="recipe__details">
                <summary class="recipe__summary">Как приготовить</summary>
                <p class="recipe__description">{{ vtoroe.description }}</p>
            </details>
            <button class="recipe__button" @click="addToCart(vtoroe.id, getRecipeCategory('vtoroe'))">{{ message }}</button>
        </article>
        
</div></template>

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