<template>
  <article class="navarea">
    <nav class="capsule nav">
      <!-- <nuxt-link class="nav__link" to="/">
        <p>Home</p>
      </nuxt-link> -->
      <select v-model="filter" @change="setFilter">
        <option disabled value="">Filter</option>
        <option value="">All</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="sale">Sales</option>
      </select>
      <button @click="$emit('click', $event)" class="nav__item" >
        <span v-if="cartTotal > 0" class="nav__count">{{ cartTotal }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="30" height="30">
          <path fill="black" d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"/>
        </svg>
      </button>
    </nav>
  </article>
</template>

<script>
export default {
  data() {
    return {
      filter: ''
    }
  },
  computed: {
    cartTotal() {
      return this.$store.state.cartTotal;
    }
  },
  methods: {
    setFilter() {
      this.$store.commit('SET_FILTER', { filter: this.filter });
    }
  }
};
</script>
