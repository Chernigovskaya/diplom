<template>
    <div class="breadcrumb center">
        <ul class="breadcrumb__ul">
            <li class="breadcrumb__li">
                <router-link to="./" class="breadcrumb__link">
                    ГЛАВНАЯ
                </router-link>
            </li>
            <li class="breadcrumb__li"> <router-link to="/product" class="breadcrumb__link">
                    ПРОДУКТЫ
                </router-link>
            </li>
        </ul>
    </div>
    <div class="product center">
        <div class="product">
            <ul class="product__text">Я исключила из питания источники глютена, лектинов и
                ферментируемых олиго-димоносахаридов и полиолов. Такие как:
                <li class="product__el" v-for="text in productText" :key="[text]">
                    {{ text }}
                </li>
            </ul>
            <p class="about__title">Я ЕМ</p>
            <div class="product-box">
                <div class="product__no-limit">
                    <h2 class="product__title">БЕЗ ОГРАНИЧЕНИЙ </h2>
                    <ul class="product__ul" v-for="product in products" :key="product.id"> {{ product.name }}
                        <li class="product__li" v-for="el in product.el" :key=[el]> {{ el }}
                        </li>
                    </ul>
                </div>
                <div class="product__limit">
                    <h2 class="product__title">ОГРАНИЧИВАЮ </h2>
                    <ul class="product__ul" v-for="prLimit in productsLimit" :key="prLimit.id"> {{ prLimit.name }}
                        <li class="product__li" v-for="el in prLimit.el" :key=[el]> {{ el }}
                        </li>
                    </ul>
                </div>
                <div class="product__no">
                    <h2 class="product__title">ЛУЧШЕ НЕ НАДО!!!</h2>
                    <ul class="product__ul" v-for="prNo in productsNo" :key="prNo.id"> {{ prNo.name }}
                        <li class="product__li" v-for="el in prNo.el" :key=[el]> {{ el }}
                        </li>
                    </ul>
                    
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "ProductComponent",
    computed: {
        ...mapState(['products', 'productsLimit', 'productsNo', 'productText'])
    },
}
</script>

<style lang="scss" scoped></style>