import products from '../static/products.json'

export const state = () => ({
  cartTotal: 0,
  cart: [],
  sale: false,
  products: products,
  filter: ''
})

export const getters = {
  women: state => filter(state.products, 'category', 'women'),
  men: state => filter(state.products, 'category', 'men'),
  sale: state => filter(state.products, 'sale', true)
}

export const mutations = {
  switchSale: state => {
    state.sale = !state.sale
  },
  clearCartCount: state => {
    state.cartTotal = 0
  },
  clearCartContents: state => {
    state.cart = []
  },
  SET_CART (state, {item}) {
    let idItem
    state.cart.forEach(function (element, index) {
      if (element.name === item.name && element.color_selected === item.color_selected) {
        idItem = index
      }
    })
    if (idItem >= 0) {
      state.cart[idItem].count = state.cart[idItem].count + item.count
    } else {
      state.cart.push(item)
    }
    state.cartTotal = state.cartTotal + item.count
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  INIT_CART (state, {cart}) {
    state.cart = cart
  },
  DELETE_ITEM (state, {idItem, item}) {
    state.cartTotal = state.cartTotal - item.count
    state.cart.splice(idItem, 1)
  },
  SET_COUNT (state, {count, index}) {
    state.cart[index].count = count
  },
  SET_TOTAL (state, {total}) {
    state.cartTotal = total
  },
  SET_FILTER (state, {filter}) {
    state.filter = filter
  }
}

export const actions = {
  addItem ({ commit }, { item }) {
    commit('SET_CART', {item})
  },
  deleteItem ({commit}, {idItem, item}) {
    commit('DELETE_ITEM', {idItem, item})
  }
}
const filter = (array, key, value) => array.filter(item => item[key] === value)
