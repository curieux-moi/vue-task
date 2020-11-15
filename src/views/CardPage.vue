<template>
  <div class="row">
    <div v-if="card" class="col s6 offset-s3">
      <h1>{{ card.title }}</h1>

      <form @submit.prevent="submitHandler">

        <div class="input-field">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Description</label>
          <span>{{description.length}}/2048</span>
        </div>

        <button class="btn" type="submit">Update</button>
      </form>

    </div>
    <h2 v-else>card not found</h2>
  </div>
</template>

<script>
export default {
  data: () => ({
    description: '',
  }),
  computed: {
    card () {
      return this.$store.getters.cardById(+this.$route.params.id)
    }
  },
  mounted () {
    this.description = this.card.description
  },
  methods: {
    submitHandler () {
      this.$store.dispatch('updateCard', {
        id: this.card.id,
        description: this.description,
      })

      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  margin-right: 1em;
}

textarea {
  min-height: 150px;
}

span {
  float: right;
  font-size: 12px;
}

label {
  top: -20px;
}
</style>