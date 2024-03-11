<template>
    <div class="breadcrumb center">
        <ul class="breadcrumb__ul">
            <li class="breadcrumb__li">
                <router-link to="./" class="breadcrumb__link">
                    ГЛАВНАЯ
                </router-link>
            </li>
            <li class="breadcrumb__li"> <router-link to="/cart" class="breadcrumb__link">
                    КОРЗИНА
                </router-link>
            </li>
        </ul>
    </div>
    <div class="cart center">
        <h2 class="cart__title"> Вы хотите приготовить:</h2>
        <ul>
            <li class="cart__name" v-for="item in cartList" :key="item.id">{{ item.name }}
            </li>
        </ul>

    </div>
    <div class="total center">
        <ul class="total__ul">Надо купить:
            <p class="total__info">Количество товара в граммах. Из расчета, что средний овощь весит примерно 150гр</p>
            <li class="total__li" v-for="key, value in totalByName" :key="key">
                <input class="total__input" type="number" :placeholder="key">
                <label class="total__label">
                    <input class="total__chek" type="checkbox">
                    <span></span>
                    {{ value }}
                </label>

            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters, } from 'vuex';


export default {
    name: "CartComponent",
    computed: {
        ...mapState(['cartList',]),
        ...mapGetters(['getCartIngr', 'totalByName']),
    },
    methods: {

    }


}
</script>

<style scoped></style>