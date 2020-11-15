<template>
  <div>
    <input type="checkbox" v-model="dragAndDrop" id="drag-and-drop">
    <label for="drag-and-drop">Enable drag & drop</label>
  </div>
</template>

<script>
  export default {
    computed: {
      dragAndDrop: {
        get () {
          return this.$store.state.dragAndDropActive
        },
        set (state) {
          this.$store.dispatch('setDragAndDropState', state)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
  position: unset;
  pointer-events: unset;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  opacity: 1;
}
label {
  font-size: 20px;
  margin-top: -5px;
}
</style>