<template>
  <li class="cart__item">
    <header class="cart__desc">
      <h4>{{ item.name }}</h4>
      <p class="cart__text--color">
        <span>{{ item.price | usdollar }}</span>
        <svg class="cart__svg" height="34" width="34">
          <circle cx="17" cy="17" r="15" stroke-width="2" :fill="item.color_selected" />
        </svg>
      </p>
      <label for="quantity"> 
        Quantity
        <input class="cart__input" @change="changeCount(count, index)" type='number' min="1" name="quantity" v-model="count"/>
      </label>
      <p>Total for this item: <strong>{{ (item.price * item.count).toFixed(2) | usdollar }}</strong></p>
    </header>
    <p class="cart__text--centered">
      <app-img-viewer 
        :imgs="item.img" 
        :name="item.name"
      />
    </p>
    <p class="cart__text--centered"><button class="main-button main-button--red" @click="deleteItem(index, item)">Supprimer</button></p>
  </li>
</template>

<script>
import AppImgViewer from './AppImgViewer.vue';

export default {
  components: {
    AppImgViewer
  },
  data() {
    return {
      count: this.item.count,
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`;
    }
  },
  methods: {
    changeCount(count, index) {
      const vm = this;
      vm.$store.commit('SET_COUNT', { count: parseInt(count) , index: index });
    },
    deleteItem(index, item) {
      const vm = this
      vm.$store.dispatch('deleteItem', { idItem: index, item: item });
    }
  }
}
</script>
