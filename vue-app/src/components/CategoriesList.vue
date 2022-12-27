<template>
  <div>
    <div class="row">
      <div class="col">
        <ul class="nav flex-column mt-3">
          <li class="nav-item">
            <router-link class="nav-link" to="/menu/all"
              >All Categories</router-link
            >
          </li>
          <li v-for="(cat, i) in categories" :key="i">
            <router-link class="nav-link" :to="'/menu/' + cat.slug">{{
              cat.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['categories']),
  },
}
</script>

<style scoped>
.row {
  margin-top: 5em;
}
.nav-link {
  color: var(--dark-green);
  opacity: 0.8;
  font-size: 1.2em;
  margin-top: 5%;
}
.nav-link:hover {
  color: var(--light-green);
}
</style>
