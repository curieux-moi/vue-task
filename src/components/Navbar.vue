<template>
  <div>

    <nav class="purple darken-4">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">TaskVue</router-link>
        <ul class="right hide-on-med-and-down">
          <router-link
            tag="li"
            to="/create"
            exact
            active-class="active"
          >
            <a>Create</a>
          </router-link>
          <router-link
              tag="li"
              to="/"
              active-class="active"
          >
            <a>List</a>
          </router-link>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  nav {
    padding: 0 2rem;
  }
</style>