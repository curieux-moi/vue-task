<template>
  <div>
    <h1>List</h1>

    <drag-and-drop-checkbox />

    <hr />

    <div class="card-list" v-if="cards.length">
      <router-link
        v-for="(card, idx) in cards"
        :key="card.id"
        :to="{name: 'card', params: {id: card.id}}"
      >
        <!-- for self-dropping we should wrap every card in two div blocks -->
        <div @dragstart="onDragStart($event, card)" :draggable="draggable">
          <div @dragover.prevent @dragenter.prevent @drop.prevent="onDrop($event, {card, idx})">
            <card :card="card" class="card"/>
          </div>
        </div>
      </router-link>
    </div>

    <p v-else>No cards yet</p>
  </div>
</template>

<script>
import Card from '@/components/Card'
import DragAndDropCheckbox from '@/components/DragAndDropCheckbox'

export default {
  components: {Card, DragAndDropCheckbox},
  computed: {
    cards () {
      return [...this.$store.getters.cards].sort((a, b) => a.position - b.position)
    },
    draggable () {
      return this.$store.state.dragAndDropActive
    }
  },
  methods: {
    onDragStart (event, card) {
      const {dataTransfer: data} = event
      data.dropEffect = 'move'
      data.effectAllowed = 'move'
      data.setData('cardId', card.id.toString())
      data.setData('cardPosition', card.position.toString())
    },
    onDrop (e, {card, idx}) {
      const itemId = parseInt(e.dataTransfer.getData('cardId'))
      const position = parseInt(e.dataTransfer.getData('cardPosition'))
      const previousCard = this.cards.find(item => item.id === itemId)
      if (previousCard) {
        this.$store.dispatch('updateCard', {...previousCard, position: idx})
        this.$store.dispatch('updateCard', {...card, position})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
}

.cut-text {
  max-width: 400px;
}

.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>