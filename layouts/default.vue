<template>
    <div class="wrapper" :class="menuOpen ? 'active' : ''">
      <app-navigation @click="toggleMenu"/>
      <nuxt/>
      <app-cart 
        :class="menuOpen ? 'active' : ''"
        @click="toggleMenu"
      />
      <span :class="menuOpen ? 'active' : ''" @click="toggleMenu" class="bg-cart" />
    </div>
</template>

<script>
import AppNavigation from './../components/AppNavigation.vue';
import AppCart from './../components/AppCart.vue';

export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  beforeMount() {
    if (JSON.parse(localStorage.getItem('cart'))) {
      if (JSON.parse(localStorage.getItem('cart')).length > 0) {
        this.$store.commit('INIT_CART', { cart : JSON.parse(localStorage.getItem('cart')) });
      }
    }
  },
  mounted() {
    let totalCart = 0
    if (JSON.parse(localStorage.getItem('cart'))) {
      JSON.parse(localStorage.getItem('cart')).forEach(element => {
        totalCart = element.count + totalCart
      })
    }
    this.$store.commit('SET_TOTAL', { total : totalCart });
  },
  components: {
    AppNavigation,
    AppCart
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      const body = document.querySelector('body');
    }
  }
};
</script>