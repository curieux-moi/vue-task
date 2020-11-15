import Vue from 'vue'
import Vuex from 'vuex'
import defaultCards from '@/defaultCards.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: JSON.parse(localStorage.getItem('cards')) || defaultCards,
    dragAndDropActive: JSON.parse(localStorage.getItem('dragAndDropActive')) || true
  },
  mutations: {
    updateList (state) {
      localStorage.setItem('cards', JSON.stringify([...state.cards]))
    },
    createCard (state, card) {
      state.cards = [...state.cards, {...card, position: state.cards.length + 1}]
    },
    updateCard (state, {id, description, position}) {
      const idx = state.cards.findIndex(c => c.id === id)
      // here we need Vue.set, otherwise changes in card won't be reactive
      Vue.set(state.cards, idx, {...state.cards[idx], description, position}) 
    },
    setDragAndDropState(state, checkboxState) {
      state.dragAndDropActive = checkboxState
      localStorage.setItem('dragAndDropActive', JSON.stringify(checkboxState))
    }
  },
  actions: {
    createCard ({commit}, card) {
      commit('createCard', card)
      commit('updateList')
    },
    updateCard ({commit}, card) {
      commit('updateCard', card)
      commit('updateList')
    },
    setDragAndDropState ({commit}, state) {
      commit('setDragAndDropState', state)
    }
  },
  getters:{
    cards: s => s.cards,
    cardById: s => id => s.cards.find(c => c.id === id)
  },
  modules: {
  }
})
