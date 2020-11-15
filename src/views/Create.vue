<template>
  <div class="row">

    <div class="col s6 offset-s3">
      <h1>Create card</h1>
    <form @submit.prevent="submitHandler">

      <div class="input-field ">
        <input id="first-name" v-model="title" type="text" class="validate" required>
        <label for="first-name">Title</label>
        <span class="helper-text" data-error="Title is required"></span>
      </div>

      <div class="input-field">
        <textarea v-model="description" id="description" class="materialize-textarea" ></textarea>
        <label for="description">Description</label>
        <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
      </div>

      <button class="btn" type="submit">Create card</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data: () => ({
    description: '',
    title: '',
  }),
  methods: {
    submitHandler () {
      this.$store.dispatch('createCard', {
        id: Date.now(),
        title: this.title,
        description: this.description
      })

      this.$router.push('/list')
    }
  }
}
</script>
