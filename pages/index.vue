<template>
  <main class="capsule">
      <section class="content">
        <app-item
          v-for="(item, index) in products"
          :key="item.id"
          :item="item"
          :index="index"
        />
      </section>
  </main>
</template>

<script>
import AppItem from './../components/AppItem.vue';

export default {
  components: {
    AppItem
  },
  data() {
    return {
      highprice: 300,
      cart: []
    };
  },
  computed: {
    products() {
      if (this.$store.state.filter === '') {
        return this.$store.state.products
      }
      if (this.$store.state.filter === 'men') {
        return this.$store.getters.men
      }
      if (this.$store.state.filter === 'women') {
        return this.$store.getters.women
      }
      if (this.$store.state.filter === 'sale') {
        return this.$store.getters.sale
      }
      return this.$store.state.products
      // .filter(el =>
      //   this.$store.state.sale
      //     ? el.price < this.highprice && el.sale
      //     : el.price < this.highprice
      // );
    }
  }
};
</script>
