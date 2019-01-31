<template>
  <aside class="cart">
    <button class="cart__close" @click="$emit('click', $event)">
      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.56 15L.28 28.38a.96.96 0 0 0 .43 1.59c.32.09.67 0 .9-.25L15 16.25l13.38 13.47a.93.93 0 0 0 1.33 0 .95.95 0 0 0 0-1.35L16.43 15.01l13.3-13.39A.96.96 0 0 0 29.3.03a.94.94 0 0 0-.91.25l-13.4 13.48L1.62.28a.94.94 0 0 0-1.33 0 .95.95 0 0 0 0 1.34l13.29 13.39z" fill="#1D1D1B" fill-rule="evenodd"/>
      </svg>
    </button>
    <article v-if="cartTotal > 0" class="cart__section">
      <ul class="cart__list">
        <app-cart-item
          v-for="(item, index) in cart"
          :key="index"
          :item="item"
          :index="index"
        />
      </ul>
      <h3 class="cart__total">Total: {{ total | usdollar }}</h3>
    </article>

    <article v-else-if="cartTotal === 0 && success === false" class="cart__section empty">
      <h3>Your cart is empty.</h3>
      <button @click="$emit('click', $event)" class="main-button">Fill er up!</button>
    </article>

    <article v-if="cartTotal > 0" class="cart__section">
      <button class="main-button" @click="clearCartContents">Delete All</button>
      <button class="main-button main-button--green" @click="validate">Valider</button>
    </article>
  </aside>
</template>

<script>
import AppCartItem from './AppCartItem.vue';

export default {
  data() {
    return {
      success: false,
    };
  },
  components: {
    AppCartItem
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.state.cartTotal;
    },
    total() {
      return Object.values(this.cart)
        .reduce((acc, el) => acc + (el.count * el.price), 0)
        .toFixed(2);
    }
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`;
    }
  },
  methods: {
    clearCartContents() {
      this.$store.commit('clearCartContents');
      this.$store.commit('clearCartCount');
    },
    deleteItem(index, item) {
      const vm = this
      vm.$store.dispatch('deleteItem', { idItem: index, item: item });
    },
    validate() {
      console.log(this.cart)
    }
  }
};
</script>

