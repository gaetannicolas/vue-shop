<template>
  <article class="product">
    <p>{{ item.name }}</p>
    <app-img-viewer 
      :imgs="item.img" 
      :name="item.name"
    />
    <p>{{ item.price }} €</p>
    <p class="product__warning" v-show="error_color">Select color</p>
    <ul class="color__list">
      <li 
        class="color__item" 
        v-for="(color, index) in item.colors" 
        :key="index"
      >
        <button class="color__button" @click="changeColor(color)">
          <svg height="34" width="34">
            <circle class="color__circle" :class="color === color_selected ? 'color__circle--activ': ''" cx="17" cy="17" r="15" stroke-width="2" :fill="color" />
          </svg>
        </button>
      </li>
    </ul>
    <label for="quantity"> 
      Quantity
      <input class="product__input" type='number' min="1" name="quantity" v-model="count"/>
    </label>
    <button class="main-button add" @click="addItem(item)">Add Item</button>
  </article>
</template>

<script>
import AppImgViewer from './AppImgViewer.vue';

export default {
  components: {
    AppImgViewer
  },
  data() {
    return {
      color_selected: '',
      error_color: false,
      count: 1,
      item_selected: {},
      cart: []
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
  methods: {
    addItem(item) {
      const vm = this;
      if (vm.color_selected === '') {
        vm.error_color = true;
      } else {
        item.color_selected = vm.color_selected
        item.count = parseInt(vm.count)
        vm.$store.dispatch('addItem', { item: JSON.parse(JSON.stringify(vm.item)) });
      }
    },
    changeColor(color){
      const vm = this;
      vm.error_color= false;
      vm.color_selected = color;
    }
  }
};
</script>
