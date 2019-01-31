<template>
  <div class="viewer" >
    <span 
      class="viewer__wrapper"
      v-for="(img, index) in imgs" 
      :key="index"
    >
      <img 
        :src="`./${img}`"
        :alt="`Image of ${name}`"
        v-show="idImg === index"
      >
    </span>
    <button class="viewer__button viewer__button--left" v-if="!(idImg === 0)" @click="decreaseIdImg">
      <svg width=20 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49">
        <path d="M10.27 5a1.11 1.11 0 0 1 1.59 0c.43.44.43 1.15 0 1.58l-8.05 8.05h26.56a1.12 1.12 0 1 1 0 2.24H3.8l8.05 8.03c.43.44.43 1.16 0 1.58-.44.45-1.14.45-1.59 0L.32 16.53a1.12 1.12 0 0 1 0-1.57l9.95-9.95z" fill="#1e201d"/>
      </svg>
    </button>    
    <button class="viewer__button viewer__button--right" v-if="!((idImg === imgs.length - 1) )" @click="increaseIdImg">
      <svg width=20 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49">
        <path d="M21.2 5a1.11 1.11 0 0 0-1.58 0 1.12 1.12 0 0 0 0 1.58l8.04 8.04H1.11c-.62 0-1.11.5-1.11 1.12 0 .62.5 1.12 1.11 1.12h26.55l-8.04 8.04a1.14 1.14 0 0 0 0 1.58c.44.45 1.16.45 1.58 0l9.96-9.95a1.1 1.1 0 0 0 0-1.57L21.2 5.01z" fill="#1e201d"/>
      </svg>
    </button>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      idImg: 0,
    }
  },
  props: {
    imgs: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    increaseIdImg() {
      this.idImg++
    },
    decreaseIdImg() {
      this.idImg--
    },
  }
}
</script>

<style>

</style>
