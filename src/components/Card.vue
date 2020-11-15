<template>
  <div class="card">
    <span class="card__id">
      Id: <span>{{ card.id }}</span>
    </span>
    <span class="card__title">
      Name: <span>{{ card.title }}</span>
    </span>
    <span class="card__description">
      Description: <span>{{ card.description }}</span>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      card: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style lang="scss" scoped>
.card {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
  cursor: pointer;

  &__id, &__title, &__description {
    span {
      color: black;
    }
  }
}
</style>