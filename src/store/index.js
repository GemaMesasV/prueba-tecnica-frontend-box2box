import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favoriteMeals: []
  },
  mutations: {
    add (state, n) {
      state.favoriteMeals = [...state.favoriteMeals, n]
    }
  }
})